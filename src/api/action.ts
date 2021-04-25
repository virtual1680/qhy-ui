import axios from '@/utils/request'

// //post
function postAction(url:string,data?:object) {
    return axios({
        url: url,
        method:'post',
        data: data
    })
}
// //put
function putAction(url:string,data?:object) {
    return axios({
        url: url,
        method:'put',
        data: data
    })
}
// //get
function getAction(url:string,data?:object) {
    return axios({
        url: url,
        method: 'get',
        params: data
    })
}
// //delete
function deleteAction(url:string,data?:object) {
    return axios({
        url: url,
        method: 'delete',
        params: data
    })
}

/**
 * 文件上传 用于富文本上传图片
 * @param url
 * @param data
 * @returns {*}
 */
function uploadAction(url:string,data:any){
    return axios({
        url: url,
        data: data,
        method:'post' ,
        headers: {
            'Content-Type': 'multipart/form-data',  // 文件上传
        },
    })
}

export {
    postAction,
    putAction,
    getAction,
    deleteAction,
    uploadAction
}
