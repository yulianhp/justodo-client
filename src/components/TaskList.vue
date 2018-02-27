<template lang="html">
  <div class="">
    <div class="card text-white border-info bg-primary mt-3 mb-3 mr-2 ml-2" v-for="(task,index) in tasks" :key="index">
      <!-- {{task}} -->
      <div class="card-body">
        <h4 class="card-title" v-if="editing">
          <input class="form-control mr-sm-2" type="text" placeholder="Task" v-model="form.task">
        </h4>
        <h4 class="card-title" v-else>{{task.task}}</h4>
        <p class="card-text" v-if="editing">
          <input class="form-control mr-sm-2" type="text" placeholder="Description" v-model="form.description">
        </p>
        <p class="card-text" v-else>{{task.description}}</p>
        <button class="btn btn-success" type="button" v-if="editing" @click="saveUpdate">Save</button>
        <button class="btn btn-info" type="button" v-else  @click="editTask(task)">Edit</button>
        <button class="btn btn-secondary" type="button" style="float:right;" v-if="editing" @click="editStatus">Cancel</button>
        <button class="btn btn-success" type="button" style="float:right;" v-if="!editing" @click="setDone(task)">Done</button>
        <hr>
        <p class="card-text"><small>Last update: {{task.updatedAt}}</small></p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data: function () {
    return {
      editing: false,
      form: {
        id: '',
        task: '',
        description: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'updateOldTask', 'getAllTasks', 'setTaskDone'
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
      // console.log(this.tasks, 'taskakskskssksk');
      // this.getAllTasks()
      this.editStatus()
    },
    setDone (data) {
      // console.log(data);
      this.setTaskDone(data._id)
      // console.log(this.form);
      // this.editStatus()
    }
  },
  computed: {
    ...mapState([
      'tasks'
    ])
  }
}
</script>

<style lang="css">
</style>
