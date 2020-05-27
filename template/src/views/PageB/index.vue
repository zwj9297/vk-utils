<template>
  <div class="page-b">
    <div>this is Page B</div>
  </div>
</template>

<script>
import { haha } from '@/utils'
export default {
  layout: 'Home',
  created() {
    haha()
  }
}
</script>

<style lang="less" scoped>
.page-b {
  color: green;
}
</style>