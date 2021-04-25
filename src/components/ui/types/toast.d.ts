import Vue from "vue";

interface Fn {
  (): void;
}

export type Params = {
  message:string,
  callback?:Fn;
}

export interface QToast {
  success(text: string | Params): void;
  error(text: string | Params): void;
  warning(text: string | Params): void;

  install(): void;
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    QToast?: QToast;
  }
}
declare module "vue/types/vue" {
  interface Vue {
    $QToast: QToast;
  }
}

export const QToast:QToast;
