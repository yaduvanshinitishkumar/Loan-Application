import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "",
        name: "LoanApplication",
        component: () => import("../components/LoanApplication.vue"),
        children: [
          {
            path: "",
            name: "LoanCalculator",
            component: () => import("../components/LoanCalculator.vue"),
          },
          {
            path: "confirm",
            name: "LoanDetailConfirmation",
            component: () => import("../components/LoanDetailConfirmation.vue"),
          },
          {
            path: "success",
            name: "RegistrationSuccessful",
            component: () => import("../components/RegistrationSuccessful.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
