<template>
  <div>
    <h1>Main Layout</h1>
    <ul>
        <li v-for="item in localData" :key="item">{{item}}</li>
    </ul>
    <router-view :localData="localData"/>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const localData=ref([])
onMounted(async () => {

  // Contoh: Melakukan fetch data dari endpoint
  // const response = await fetch('/api/local-data');
  // const data = await response.json();
  const data =["local data1","local data2"]
  localData.value = data;
});
</script>