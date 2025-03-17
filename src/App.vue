<template>
  <div class="app">
    <div class="app">
      <el-config-provider :locale="zhCn">
        <router-view></router-view>
      </el-config-provider>
    </div>

    <!-- <h2>app</h2>
    <router-link to="/main">主要</router-link>
    <router-link to="/login">登录</router-link> -->
    <!-- <RouterView></RouterView> -->

    <!-- <div class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import HelloWorld from './components/HelloWorld'
// import TheWelcome from './components/TheWelcome.vue'

// TS测试
// interface Ikun {
//   name: string
// }

// const ikun: Ikun = { name: 'kobe' }
// console.log(ikun)
</script>

<style lang="less" scoped>
.app {
  height: 100vh;
  width: 100vw;
}

.test {
  // 根元素
  color: blue;

  :deep(.title) {
    font-size: 100px;
  }
}
</style>
