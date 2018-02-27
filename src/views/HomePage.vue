<template lang="html">
  <div class="">
    <Navbar/>
    <div class="container card border-primary">
      <TaskList/>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import TaskList from '../components/TaskList.vue'
export default {
  components: {
    Navbar, TaskList
  },
  created () {
    this.$store.dispatch('getAllTasks')
  }
}
</script>

<style lang="css">

</style>
