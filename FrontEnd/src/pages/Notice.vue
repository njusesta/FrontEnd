<template>
  <div>
    <navi></navi>
    <p>通知</p>
  </div>
</template>

<script>
import navi from "../components/navi"
export default {
  name: 'Notice',
  components: {navi},
  data() {
    return {
      name: "",
    }
  },
  mounted(){
    alert("Notice！");
  },
  methods: {

  }
}
</script>

<style>

</style>
