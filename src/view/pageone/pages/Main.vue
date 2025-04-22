<template>
  <div>
    <h2>Halaman PageOne</h2>
    <h3>Kirim Dari Main layout utama</h3>
    <ul>
      <li v-for="item in localData" :key="item">{{ item }}</li>
    </ul>
    <h3>Global Data</h3>
    <ul>
      <li v-for="item in globalData" :key="item">{{ item }}</li>
    </ul>
    <h3>Fetch Data Dari Api </h3>
    <table style="width: 60%; border: 1px solid black; text-align: left;">
        <thead>
            <th>Judul</th>
            <th>Slug</th>
            <th>Kategori</th>
        </thead>
        <tbody>
            <tr v-if="dataGlobalTest">
                <td>{{ dataGlobalTest.judul }}</td>
                <td>{{ dataGlobalTest.slug }}</td>
                <td>{{ dataGlobalTest.kategori }}</td>
            </tr>
            <tr v-else><td colspan="3">Loadig</td></tr>
        </tbody>
    </table>
  </div>
</template>

<script setup>
import { useMainStore } from '@stores/mainStore'
import { computed, onMounted } from 'vue'
import {storeToRefs} from 'pinia'

const mainStore = useMainStore();
// Bongkar state yang ingin Anda gunakan secara reaktif
const { globalData, globalTest } = storeToRefs(mainStore);
onMounted(async () => {
  await mainStore.fetchGlobalTest();
  await mainStore.fetchGlobalTest();
  console.log('Nilai globalTest:', globalTest.value); // Akses nilai getter menggunakan .value
})

// Jika Anda ingin menggunakan getter secara terpisah (misalnya untuk komputasi)
const dataGlobalTest = computed(() => mainStore.getGlobalTest);
console.log('Nilai dataGlobalTest:', dataGlobalTest); // Akses nilai getter menggunakan .value

const props = defineProps({
  localData: {
    type: Array,
    required: true,
  },
});
</script>
