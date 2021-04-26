import Vue from "vue";
import VueRouter from "vue-router";
import dashboard01 from "../views/dashboard01.vue";
import dashboard02 from "../views/dashboard02.vue";
import dashboard03 from "../views/dashboard03.vue";
import dashboard04 from "../views/dashboard04.vue";
import Login from "../views/Login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard01",
    name: "dashboard01",
    component: dashboard01,
  },
  {
    path: "/dashboard02",
    name: "dashboard02",
    component: dashboard02,
  },
  {
    path: "/dashboard03",
    name: "dashboard03",
    component: dashboard03,
  },
  {
    path: "/dashboard04",
    name: "dashboard04",
    component: dashboard04,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
