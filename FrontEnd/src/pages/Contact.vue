<template>
  <div>
    <navi></navi>
    <p>联系我们</p>
  </div>
</template>

<script>
import navi from "../components/navi"
export default {
  name: 'Contact',
  components: {navi},
  data() {
    return {
      name: "",
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
