/// <reference types="vite/client" />

//在导入 .vue 文件时，应该将其视为一个 DefineComponent 类型的模块。
// volar等插件似乎也会帮你做这步
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const src: DefineComponent
  export default component
}

declare module '*.mjs'
