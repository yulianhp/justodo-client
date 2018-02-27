import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export const store = new Vuex.Store({
  state: {
    tasks: [],
    archives: []
  },
  mutations: {
    getTasks (state, payload) {
      state.tasks = payload
    },
    getArchives (state, payload) {
      state.archives = payload
    },
    addTask (state, payload) {
      state.tasks.push(payload)
    }
  },
  actions: {
    getAllTasks (context) {
      http.get('tasks/todo')
        .then(data => {
          console.log(data, 'get all tasks')
          context.commit('getTasks', data.data.tasks)
        }).catch(err => {
          console.log(err)
        })
    },
    getAllDone (context) {
      http.get('tasks/done')
        .then(data => {
          console.log(data, 'get all done')
          context.commit('getArchives', data.data.tasks)
        }).catch(err => {
          console.log(err)
        })
    },
    postNewTask (context, data) {
      // console.log(data)
      http.post('tasks', data)
        .then(data => {
          // console.log(data)
          context.commit('addTask', data.data.task)
        }).catch(err => {
          console.log(err)
        })
    },
    updateOldTask (context, data) {
      console.log(data)
      http.put(`tasks/edit/${data.id}`, data)
        .then(updated => {
          context.dispatch('getAllTasks')
          console.log(updated)
        }).catch(err => {
          console.log(err)
        })
    },
    setTaskDone (context, data) {
      // console.log(data,'ini id')
      http.put(`tasks/done/${data}`)
        .then(updated => {
          console.log(updated)
          context.dispatch('getAllTasks')
          context.dispatch('getAllDone')
        }).catch(err => {
          console.log(err)
        })
    }
  }
})
