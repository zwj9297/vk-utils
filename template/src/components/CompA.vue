<template>
  <div class="comp-a">
    <button type="button" @click="addRouteC">添加路由PageC</button>
  </div>
</template>

<script>
export default {
  methods: {
    addRouteC() {
      const componentName = 'PageC'
      this.$router.addRoutes([{
        path: '/c',
        component: () => import(/*webpackChunkName: "pageC"*/ 'views/PageC')
      }])
    }
  }
}
</script>
