<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb"><headercrumb /></div>
      <div class="info">
        <headerinfo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['foldChange'])
import { ref } from 'vue'
import headerinfo from '../main-header/c-cpns/header-info.vue'
import headercrumb from '../main-header/c-cpns/header-crumb.vue'
const isFold = ref(false)
function handleMenuIconClick() {
  // 改变折叠的状态
  isFold.value = !isFold.value

  // 将事件和状态传递给父组件
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
