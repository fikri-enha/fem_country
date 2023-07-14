import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/HomePage.vue'
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    title: "Home",
  },
  // {
  //   path: "/country/:id",
  //   name: "countryView",
  //   component: () => {},
  //   meta: {
  //     title: "Country",
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${
    to.params.country ? `${to.params.country}` : `${to.meta.title}`
  }`;
  next();
});

export default router;
