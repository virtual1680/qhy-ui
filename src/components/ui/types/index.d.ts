import Vue from 'vue';

import { QComponent } from './component';
import {QDialog} from './dialog'
import {QLoading} from './loading'

export const version: string;
export function install(vue: typeof Vue): void;

// export class Tag extends VanComponent {}


export {
  QDialog,
  QLoading,
}
