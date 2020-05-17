<template>
  <div>
    <h1>hi, my name is {{name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Say',
  props: {
    name: { type: String }
  }
}
</script>

<style lang="less" scoped>
h1 {
  color: green;
}
</style>