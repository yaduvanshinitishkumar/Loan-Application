import { state } from "./state";
import mutations from "./mutation";
import actions from "./action";

const getters = {
  auth: (state) => state,
  isAuthenticated: state => state.userId && state.authToken
};

export default {
  state,
  getters,
  actions,
  mutations
};