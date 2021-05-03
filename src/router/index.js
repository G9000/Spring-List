import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Spring from "../views/Spring";

const routes = [
  {
    path: "/",
    name: "Spring",
    component: Spring,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
