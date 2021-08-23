import axios from "../../../services/Axios";

const actions = {
  calculateLoan({ commit }, data) {
    const amount = data.amount;
    const months = data.paymentPeriod;
    const rate = 7;
    const interest = (amount * (rate * 0.01)) / months;
    const monthlyPayment = ((amount / months) + interest).toFixed(2);

    const loanApplicationData = {
      ...data,
      currentStep: 2,
      monthlyPayment
    };

    commit("SET_LOAN_DATA", loanApplicationData);
  },
  toggleTermsAndConditionCheckBox({ commit }, isTermsAndConditionConfirmed) {
    commit("TOGGLE_TERMS_AND_CONDITION", isTermsAndConditionConfirmed);
  },
  submitLoanApplication({ state, commit }, { username }) {
    const data = {
      currency: state.currency,
      paymentPeriod: state.paymentPeriod,
      monthlyPayment: state.monthlyPayment,
      isTermsAndConditionConfirmed: state.isTermsAndConditionConfirmed,
      currentStep: state.currentStep,
      amount: state.amount,
      username: username
    };

    const response = axios.registerLoanApplication("/register", data);

    if (response.success) {
      commit("SET_REGISTRATION_STATUS", response.success);
    } else {
      commit("setError", [{ title: "Registration Failed", message: "Loan application details are incorrect!" }]);
      commit("resetError");
      commit("SET_REGISTRATION_STATUS", false);
    }
  }
};

export default actions;
