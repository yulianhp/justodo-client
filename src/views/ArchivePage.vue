<template lang="html">
  <div class="">
    <Navbar/>
    <div class="container card border-primary">
      <DoneList/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import DoneList from '../components/DoneList.vue'
export default {
  components: {
    Navbar, DoneList
  },
  created () {
    this.$store.dispatch('getAllDone')
  }
}
</script>

<style lang="css">

</style>
