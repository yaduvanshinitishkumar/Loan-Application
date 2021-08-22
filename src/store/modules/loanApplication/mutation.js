const mutations = {
  SET_LOAN_DATA: (state, data) => {
    state.amount = data.amount;
    state.paymentPeriod = data.paymentPeriod;
    state.currentStep = data.currentStep;
    state.currency = data.currency;
    state.monthlyPayment = data.monthlyPayment;
  },
  TOGGLE_TERMS_AND_CONDITION: (state, isTermsAndConditionConfirmed) => {
    state.isTermsAndConditionConfirmed = isTermsAndConditionConfirmed;
  },
  SET_REGISTRATION_STATUS: (state, status) => {
    state.isRegistrationSuccessful = status;
    state.currentStep = 3;
  }
};

export default mutations;
