import { createStore } from "vuex";
import loanApplication from "./modules/loanApplication/index";
import admin from "./modules/admin/index";
import auth from "./modules/auth/index";

export default createStore({
  state: {
    errors: [], // {title: '' message : ''},
    isErrorActive: false
  },
  mutations: {
    setError(state, errors) {
      state.errors = errors;
      state.isErrorActive = true;
    },
    resetError(state) {
      state.errors = [];
      state.isErrorActive = false;
    }
  },
  actions: {
    // Global Error Handler
    setErrorMessage({ commit }, errorPayload) {
      console.log(errorPayload);
      const errors = [];
      errorPayload.forEach(error => {
        errors.push({ title: error.title, message: error.message });
      });
      commit("setError", errors);
    }
  },
  getters:{
    getErrors: state => state.errors,
    isErrorActive: state => state.isErrorActive,
  },
  modules: {
    auth,
    admin,
    loanApplication
  }
});
