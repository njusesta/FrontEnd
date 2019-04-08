<template>
  <div>
    <navi></navi>
    <p>主页</p>
  </div>
</template>

<script>
import navi from "../components/navi"
export default {
  name: 'Home',
  components: {navi},
  data() {
    return {
      name: "Name",
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
