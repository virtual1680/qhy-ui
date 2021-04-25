import Vue from 'vue';

export class QComponent extends Vue {
  static name: string;

  static install(vue: typeof Vue): void;
}
