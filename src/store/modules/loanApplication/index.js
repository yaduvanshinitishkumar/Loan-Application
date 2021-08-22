import { state } from "./state";
import mutations from "./mutation";
import actions from "./action";

const getters = {
  loanApplicationData: (state) => state,
  currentStep: state => state.currentStep
};

export default {
  state,
  getters,
  actions,
  mutations
};