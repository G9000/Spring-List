import { createApp } from "vue";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faPlus,
  faTrash,
  faPen,
  faLock,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";

library.add(faPlus, faTrash, faCheck, faPen, faLock, faUnlock);

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(router)
  .mount("#app");
