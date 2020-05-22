<template>
  <div class="vk-say">
    <h1 class="vk-say__title">hi, my name is {{name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'say',
  props: {
    name: { type: String }
  }
}
</script>
