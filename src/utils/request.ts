import Vue from 'vue'
import axios, {AxiosResponse, AxiosRequestConfig,AxiosError,Method} from 'axios';
import {Modal, notification} from 'ant-design-vue'
import {ACCESS_TOKEN} from '@/store/mutation-types';
import store from '../store/index'
// @ts-ignore
import {QLoading} from '@/components/ui'
// 创建 axios 实例
const instance = axios.create({
    baseURL: 'http://localhost:8088/jeecg-boot/', // api base_url
    timeout: 15000 // 请求超时时间
});

// 定义接口
interface PendingType {
    url?: string;
    method?: Method;
    params: any;
    data: any;
    cancel: Function;
}

type Data = {
    code:number;
    message:string;
    result: any
    success: boolean;
    timestamp: any;
}
// 取消重复请求
const pending: Array<PendingType> = [];
const CancelToken = axios.CancelToken;


// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
    for (const key in pending) {
        const item: number = +key;
        const list: PendingType = pending[key];
        // 当前请求在数组中存在时执行函数体
        if (list.url === config.url && list.method === config.method && JSON.stringify(list.params) === JSON.stringify(config.params) && JSON.stringify(list.data) === JSON.stringify(config.data)) {
            // 执行取消操作
            list.cancel('操作太频繁，请稍后再试');
            // 从数组中移除记录
            pending.splice(item, 1);
        }
    }
};

/** 请求超时 重新请求 */
const reRequest = (error:AxiosError) =>{
    const config: AxiosRequestConfig = error.config;
    const response = error.response;
    // 全局的请求次数,请求的间隙
    const [RETRY_COUNT, RETRY_DELAY] = [3, 1000];
    if (config && RETRY_COUNT) {
        // 设置用于跟踪重试计数的变量
        config.headers['retryCount'] = config.headers['retryCount'] || 0;
        // 检查是否已经把重试的总数用完
        if (config.headers['retryCount'] >= RETRY_COUNT) {
            return Promise.reject(response || { message: error.message });
        }
        // 增加重试计数
        config.headers['retryCount']++;
        // 创造新的Promise来处理指数后退
        const backOff = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, RETRY_DELAY || 1);
        });
        // instance重试请求的Promise
        backOff.then(() => {
             instance(config);
        });
    }
};

// request interceptor
instance.interceptors.request.use((config:AxiosRequestConfig) => {
    /** 开启UI加载中... */
    QLoading.open();
    /** 系统没有token机制可以关闭 */
    const token = Vue.ls.get(ACCESS_TOKEN);
    if (token) {
        config.headers[ 'X-Access-Token' ] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
    }
    /** 判断该请求是否正在进行 */
    removePending(config);
    config.cancelToken = new CancelToken((c) => {
        pending.push({ url: config.url, method: config.method, params: config.params, data: config.data, cancel: c });
    });
    return config
},(error:AxiosError) => {
    return Promise.reject(error)
});

// response interceptor
instance.interceptors.response.use((response:AxiosResponse) => {
    /** 关闭UI加载中... */
    QLoading.close();
    /** 移除请求完成的请求数据 */
    removePending(response.config);
    let data:Data = response.data;
    /** 根据业务需求来定 */
    if (data.success) {
        return response.data.result
    } else {
        notification.error({
            message: '系统提示',
            description: data.message || "请求错误",
            duration: 4
        });
        throw (data.message)
    }
}, (error:AxiosError)=>{
    /** 关闭UI加载中... */
    QLoading.close();
    console.log("报错--",error);
    const token = Vue.ls.get(ACCESS_TOKEN);
    const response = error.response;
    /** 根据返回的http状态码做不同的处理 */
    switch (response?.status) {
        case 403:
            notification.error({ message: '系统提示', description: '拒绝访问',duration: 4});
            break;
        case 500:
            console.log("------error.response------",error.response);
            if(token && response.data.message.includes("Token失效")){
                Modal.error({
                    title: '登录已过期',
                    content: '很抱歉，登录已过期，请重新登录',
                    okText: '重新登录',
                    mask: false,
                    onOk: () => {
                        store.dispatch('Logout').then(() => {
                            Vue.ls.remove(ACCESS_TOKEN);
                            try {
                                let path = window.document.location.pathname;
                                console.log("location pathname -> "+path);
                                if(path!="/" && path.indexOf('/user/login')==-1){
                                    window.location.reload()
                                }
                            }catch (e) {
                                window.location.reload()
                            }
                        })
                    }
                })
            }else{
                notification.error({ message: '系统提示', description: response.data.message,duration: 4});
            }
            break;
        case 404:
            notification.error({ message: '系统提示', description:'很抱歉，资源未找到!',duration: 4});
            break;
        case 504:
            notification.error({ message: '系统提示', description: '网络超时'});
            reRequest(error);
            break;
        case 401:
            notification.error({ message: '系统提示', description:'未授权，请重新登录',duration: 4});
            if (token) {
                store.dispatch('loginOut').then(() => {
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500)
                })
            }
            break;
        default:
            notification.error({
                message: '系统提示',
                description: response?.data?.message || "错误",
                duration: 4
            });
            break
    }

    return Promise.reject(response || {message: error.message});
});


export default instance
