<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <form class="form-inline my-2 my-lg-0" style="margin:auto;">
      <input class="form-control mr-sm-2" type="text" placeholder="Task" v-model="form.task">
      <input class="form-control mr-sm-2" type="text" placeholder="Description" v-model="form.description">
      <button class="btn btn-secondary my-2 my-sm-0" type="button" @click="postNewTask(form)">+ New task</button>
    </form>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link :to="{ path: '/home'}" class="text-white">Home<span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ path: '/archive'}" class="text-white">Archive</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data: function () {
    return {
      form: {
        task: '',
        description: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'postNewTask'
    ])
  }
}
</script>

<style lang="css">
</style>
