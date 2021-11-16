import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile/:id",
    name: "Profile",

    component: function () {
      return import("../views/Profile.vue");
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
