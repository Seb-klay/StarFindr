<template>
  <div id="planet">
    <mars></mars>
  </div>
</template>

<script>
import Mars from '@/components/Mars.vue'

export default {
  name: 'Planetes',
  components: {
    Mars
  }
}
</script>

<style>
#planet {
  background-image: url("src/assets/milky-way.jpeg");
  padding: 5%;
}
</style>