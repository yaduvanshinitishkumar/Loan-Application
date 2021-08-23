import { state } from "./state";
import mutations from "./mutation";
import actions from "./action";

const ADMIN_USERNAME = "admin";
const getters = {
  auth: (state) => state,
  isAuthenticated: state => state.userId !== null && state.authToken !== null,
  isAdmin: state => state.username === ADMIN_USERNAME
};

export default {
  state,
  getters,
  actions,
  mutations
};