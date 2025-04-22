import { defineStore } from 'pinia';
import axios from 'axios';
export const useMainStore = defineStore('main', {
  state: () => ({
    globalData: null,
    globalTest: null,

  }),
  getters: {
    getGlobalData: (state) => state.globalData,
    getGlobalTest: (state) => state.globalTest,
  },
  actions: {
    async fetchGlobalData() {
      const data=["data1","data2"]
      this.globalData = data;
    },

    async fetchGlobalTest  () {
        const options = {
            method: 'POST',
            url: 'http://sekolahskillapiv1.test/api/route',
            headers: {
              'Content-Type': 'application/json',
              token: 'eac024c1e07252a7efe938eda55f998c207a5d570b5656c4029292bc034ce3b0748fa959ad4c0f271743577968',
              'X-Slice': 'xYaD8DSTe8xopA8Mui8CapR8MZx8BiBG8Mui8Rx38Rx38Tak8BiBG8DSTe8DPs8DSTe8AAxY8BiBG8MZx8OtiX8Zaee8Tak8Rx38XFhG8Mui8CapR8MZx8BiBG8Mui8Rx38Rx38Tak8BiBG8DSTe8sadP8DSTe8MkNixy8mnz8CapR8xopA8MZx8OtiX8Mui8CapR8DSTe8DPs8DSTe8OtiX8CapR8poxik8Tak8BnM8DSTe8xXDD918'
            },
            data: {id: 7, mode: 'single'}
          };
          return axios.request(options)
           .then(response => {
            this.globalTest = response.data;
          })
          .catch(error => {
            console.error(error);
          })
          .finally(() => {
            console.log('Fetch global test selesai.');
            this.getGlobalTest
          });

    },
  },

});
