<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside class="aside" :width="isFold ? '60px' : '210px'">
        <mainmenu :isFold="isFold" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <mainheader @fold-change="handlefoldChange" />
        </el-header>
        <el-main>
          <routerView></routerView>
        </el-main>
      </el-container>
    </el-container>

    <!-- <button @click="handleExitClick">退出登录</button> -->
  </div>
</template>

<script setup lang="ts">
import mainmenu from '@/components/main-menu/main-menu.vue'
import mainheader from '@/components/main-header/main-header.vue'
import { ref } from 'vue'

const isFold = ref(false)
function handlefoldChange(flag: boolean) {
  isFold.value = flag
}

console.log(isFold.value)
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 2s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
