import Vue from "vue";
// import * as Action from "@/api/manage";

export declare interface Action {
    postAction(url: string, data?: object):Promise<any>
    putAction(url: string, data?: object):Promise<any>
    getAction(url: string, data?: object):Promise<any>
    deleteAction(url: string, data?: object):Promise<any>
    uploadAction(url: string, data?: object):Promise<any>
}


declare module "vue/types/options" {
    interface ComponentOptions<V extends Vue> {
        http?: Action;
    }
}
declare module "vue/types/vue" {
    interface Vue {
        $http: Action;
    }
}
