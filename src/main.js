import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { useMainStore } from '@stores/mainStore';
import '@/assets/sass/app.scss';


const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
async function main() {
  const mainStore = useMainStore();
  await mainStore.fetchGlobalData();
  console.log("fetch global data selesai")
  console.log(mainStore.globalData)
  app.mount('#app');
}

main();
