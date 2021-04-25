import Vue from "vue";

interface fn {
  (): void;
}

export type Params = {
  title?:string,
  message:string,
  onConfirm?:fn,
  onClose?:fn
}

export interface QDialog {
  open(params:Params): void;
  install(): void;
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    QDialog?: QDialog;
  }
}
declare module "vue/types/vue" {
  interface Vue {
    $QDialog: Dialog;
  }
}

export const QDialog: QDialog;
