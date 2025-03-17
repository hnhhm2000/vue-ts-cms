<template>
  <div class="home">
    <h2>home</h2>
  </div>
</template>

<script lang="ts">
// 过渡阶段的写法，现在已被setup代替
// 使用了 defineComponent 来定义组件的选项
import { defineComponent } from 'vue'

// export default {
//   props: {},
//   data() {
//     return {};
//   },
//   methods: {},
//   setup() {},
// };

export default defineComponent({
  props: {},
  components: {},
  data: () => {
    return {}
  },
  methods: {},
  computed: {}
})
</script>

<style lang="less" scoped></style>
