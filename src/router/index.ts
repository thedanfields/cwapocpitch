import PatientView from "@/views/PatientView.vue";
import { createRouter, createWebHistory } from "vue-router";
import TasksView from "../views/TasksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "tasks" },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/tasks",
      name: "tasks",
      component: TasksView,
    },
    {
      path: "/patient/:patient_id",
      name: "patient",
      component: PatientView,
      props: true,
    },
  ],
});

export default router;
