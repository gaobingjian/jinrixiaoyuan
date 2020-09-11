import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import leave from "../view/leave.vue";
import form from "../view/form.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "leave",
    component: leave
  },
  {
    path: "/form",
    name: "form",
    component: form
  }
];

const router = new VueRouter({
  routes
});

export default router;
