import { state } from "./state";
import mutations from "./mutation";
import actions from "./action";

const getters = {
  adminData: (state) => state,
};

export default {
  state,
  getters,
  actions,
  mutations
};