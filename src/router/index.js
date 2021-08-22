import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next({ name: "Home" });
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/profile",
    name: "Profile",
    beforeEnter: ifAuthenticated,
    component: () => import("../components/Profile.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: "",
        name: "LoanApplication",
        component: () => import("../components/LoanApplication.vue"),
        children: [
          {
            path: "",
            name: "LoanCalculator",
            component: () => import("../components/LoanCalculator.vue")
          },
          {
            path: "confirm",
            name: "LoanDetailConfirmation",
            component: () => import("../components/LoanDetailConfirmation.vue")
          },
          {
            path: "success",
            name: "RegistrationSuccessful",
            component: () => import("../components/RegistrationSuccessful.vue")
          },
        ]
      }
    ]
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue")
  },
  {
    path: "/admin-dashboard",
    name: "AdminDashboard",
    beforeEnter: ifAuthenticated,
    component: () => import("../components/admin/AdminDashboard.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
