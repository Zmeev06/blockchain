import { createApp } from "vue";
import App from "./index.vue";
import { store, router } from "./providers";
import PrimeVue from "primevue/config";

const initializeApp = createApp(App).use(store).use(PrimeVue).use(router);

export const app = initializeApp;
