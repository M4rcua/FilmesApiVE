import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
<<<<<<< HEAD

import "./assets/main.css";
import router from "router";
const app = createApp(App);

app.use(createPinia());
app.use(router);

=======
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.use(createPinia());

>>>>>>> 9509f2f52163fd1d4c26b33a1a7a22f616ade83a
app.mount("#app");
