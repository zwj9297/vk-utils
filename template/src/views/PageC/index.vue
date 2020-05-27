<template>
  <div class="page-c">
    <div>this is Page C</div>
    <router-view />
  </div>
</template>

<script>
export default {
  layout: 'Home'
  
}
</script>

<style lang="less" scoped>
.page-c {
  color: blue;
}
</style>