import { createStore } from "vuex";
import loanApplication from "./modules/loanApplication/index";
import admin from "./modules/admin/index";
import auth from "./modules/auth/index";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    admin,
    loanApplication
  }
});
