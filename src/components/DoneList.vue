<template lang="html">
  <div class="">
    <div class="card text-white border-secondary bg-dark mt-3 mb-3 mr-2 ml-2" v-for="(done,index) in archives" :key="index">
      <div class="card-body">
        <h4 class="card-title" style="text-decoration: line-through;">{{done.task}}</h4>
        <p class="card-text" style="text-decoration: line-through;">{{done.description}}</p>
        <hr>
        <p class="card-text"><small>Added: {{done.createdAt}}</small></p>
        <p class="card-text"><small>Last update: {{done.updatedAt}}</small></p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data: function () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'updateOldTask', 'getAllTasks'
    ]),
    editStatus () {
      this.editing = !this.editing
    },
    fetchTask (data) {
      this.form.id = data._id
      this.form.task = data.task
      this.form.description = data.description
    },
    editTask (data) {
      this.editStatus()
      this.fetchTask(data)
    },
    saveUpdate () {
      this.updateOldTask(this.form)
      this.editStatus()
    }
  },
  computed: {
    ...mapState([
      'archives'
    ])
  }
}
</script>

<style lang="css">
</style>
