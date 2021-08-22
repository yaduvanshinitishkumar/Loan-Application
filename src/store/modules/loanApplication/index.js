import { state } from "./state";
import mutations from "./mutation";
import actions from "./action";

const getters = {
  loanApplicationData: (state) => state
};

export default {
  state,
  getters,
  actions,
  mutations
};