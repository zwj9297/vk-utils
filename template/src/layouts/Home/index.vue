<template>
  <div class="layout">
    <div>Home</div>
    <div>
      <router-link to="/a">Page A</router-link>
      <router-link to="/b">Page B</router-link>
      <router-link to="/c">Page C</router-link>
      <router-link to="/c/2">Page C/2</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;
}
</style>