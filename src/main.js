import { createApp } from "vue";
import App from "./App.vue";

import { create, NSelect } from "naive-ui";

const naive = create({
  components: [NSelect],
});

createApp(App).use(naive).mount("#app");
