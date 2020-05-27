<template>
  <div class="page-a">
    <div>this is Page A</div>
    <vk-hello/>
    <vk-say name="tom"/>
  </div>
</template>

<script>
import { haha } from '@/utils'
// import Hello from 'vk-utils/lib/hello'
// import 'vk-utils/lib/theme-chalk/hello.css'

export default {
  layout: 'Home',
  // components: { VkHello: Hello },
  mounted() {
    haha()
    // console.log(Hello)
  }
}
</script>

<style lang="less" scoped>
.page-a {
  color: red;
}
</style>