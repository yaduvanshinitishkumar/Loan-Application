<template>
  <div class="row q-mt-lg">
    <RoundedButton
      color="white"
      label="INR"
      text-color="black"
      :on-click="() => handleCurrency('INR')"
      :is-flat="currency !== 'INR'"
    />
    <RoundedButton
      color="white"
      label="EUR"
      :is-flat="currency !== 'EUR'"
      text-color="black"
      :on-click="() => handleCurrency('EUR')"
    />
  </div>

  <TitledSlider
    title="Loan Amount"
    button-post-fix="INR"
    :min="0"
    :max="15000"
    min-value-caption="0 INR"
    max-value-caption="15,000 INR"
    :on-slider-change="onAmountChangeHandler"
  />

  <TitledSlider
    title="Payment period"
    button-post-fix="months"
    :min="0"
    :max="26"
    min-value-caption="0 months"
    max-value-caption="36 months"
    :on-slider-change="onPaymentPeriodChangeHandler"
  />

  <div class="row flex justify-end q-mt-md">
    <RoundedButton
      label="591 INR"
      color="black"
      :is-out-line="true"
      style="border-radius: 30px;"
      :on-click="() => {}"
    />
  </div>

  <div class="row flex flex-center q-mt-xl">
    <RoundedButton
      label="Next"
      style="border-radius: 30px;"
      :on-click="moveToNextStage"
      right-icon="fa fa-arrow-right"
    />
  </div>
</template>

<script>
import RoundedButton from "./layouts/RoundedButton";
import TitledSlider from "./TitledSlider";
import { mapActions, mapState } from "vuex";

export default {
  name: "LoanCalculator",
  components: { TitledSlider, RoundedButton },
  data() {
    return {
      currency: "INR",
      amount: null,
      paymentPeriod: null
    };
  },
  computed: {
    ...mapState({
      currentStep: state => state.loanApplication.currentStep
    })
  },
  methods: {
    ...mapActions(["calculateLoan", "setErrorMessage"]),
    handleCurrency(currency) {
      this.currency = currency;
    },
    onAmountChangeHandler(value) {
      this.amount = value;
    },
    onPaymentPeriodChangeHandler(value) {
      this.paymentPeriod = value;
    },
    isValid(data) {
      const errors = [];
      if (!data || !data.amount || data.amount === 0) {
        errors.push("Amount is required!");
        console.log("Amount is required!");
        this.setErrorMessage([{ title: "Invalid Amount", message: "Amount is required!" }]);
      }
      if (!data || !data.paymentPeriod || data.paymentPeriod === 0) {
        errors.push("Payment Period is required!");
        console.log("Payment Period is required!");
        this.setErrorMessage([{ title: "Invalid Amount", message: "Amount is required!" }]);
        this.setErrorMessage([{ title: "Payment Period", message: "Payment Period is required!" }]);
      }

      if (errors.length > 0) return false;
      return true;
    },
    moveToNextStage() {
      const loanCalculatorData = {
        amount: this.amount,
        paymentPeriod: this.paymentPeriod,
        currency: this.currency
      };
      if (this.isValid(loanCalculatorData)) {
        this.calculateLoan(loanCalculatorData);
        if (this.currentStep === 2) {
          this.$router.push({ name: "LoanDetailConfirmation" });
        }
      }

    }

  }
};
</script>

<style scoped>

</style>