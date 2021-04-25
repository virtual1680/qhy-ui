import Vue from "vue";

export interface QLoading {
  open(message?:string): void;
  close(): void;
  install(): void;
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    QLoading?: QLoading;
  }
}
declare module "vue/types/vue" {
  interface Vue {
    $QLoading: QLoading;
  }
}

export const QLoading:QLoading;
