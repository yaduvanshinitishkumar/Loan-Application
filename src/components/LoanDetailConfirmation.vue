<template>
  <div class="row q-mt-lg">
    <div class="col">
      <div
        style="border-bottom: 1px solid #0c365a"
        class="row flex justify-between flex-center q-pb-sm q-mt-lg"
      >
        <span class="text-weight-bold">Loan amount</span>
        <span class="text-weight-bold">{{ amount }} {{ currency }}</span>
      </div>

      <div
        style="border-bottom: 1px solid #0c365a"
        class="row flex justify-between flex-center q-pb-sm q-mt-lg"
      >
        <span class="text-weight-bold">Loan currency</span>
        <span class="text-weight-bold">{{ currency }}</span>
      </div>


      <div
        style="border-bottom: 1px solid #0c365a"
        class="row flex justify-between flex-center q-pb-sm q-mt-lg"
      >
        <span class="text-weight-bold">Repay period</span>
        <span class="text-weight-bold">{{ paymentPeriod }} months</span>
      </div>


      <div
        style="border-bottom: 1px solid #0c365a"
        class="row flex justify-between flex-center q-pb-sm q-mt-lg"
      >
        <span class="text-weight-bold">Monthly payment</span>
        <span class="text-weight-bold">{{ monthlyPayment }} {{ currency }}</span>
      </div>


      <div class="row q-mt-sm" style="display: flex; align-items: center;">
        <q-checkbox v-model="confirmTermsAndCondition" label="I agree with" color="teal" />
        <a href="#" class="q-ml-sm">Terms & condition</a>
      </div>

      <div class="flex justify-center q-mt-xl">
        <RoundedButton
          label="Submit"
          style="border-radius: 30px;"
          :on-click="submit"
          right-icon="fa fa-arrow-right"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RoundedButton from "./layouts/RoundedButton";
import { mapActions, mapState } from "vuex";

export default {
  name: "LoanDetailConfirmation",
  components: { RoundedButton },
  data() {
    return {
      confirmTermsAndCondition: false
    };
  },
  computed: {
    ...mapState({
      currency: state => state.loanApplication.currency,
      paymentPeriod: state => state.loanApplication.paymentPeriod,
      monthlyPayment: state => state.loanApplication.monthlyPayment,
      isTermsAndConditionConfirmed: state => state.loanApplication.isTermsAndConditionConfirmed,
      currentStep: state => state.loanApplication.currentStep,
      amount: state => state.loanApplication.amount,
      isRegistrationSuccessful: state => state.loanApplication.isRegistrationSuccessful.amount,
      username: state => state.auth.username
    })
  },
  methods: {
    ...mapActions(["toggleTermsAndConditionCheckBox", "submitLoanApplication"]),
    submit() {
      if (this.isTermsAndConditionConfirmed) {
        this.submitLoanApplication({ username: this.username });
        this.$router.push({ name: "RegistrationSuccessful" });
      }
    }
  },
  watch: {
    confirmTermsAndCondition(value) {
      this.toggleTermsAndConditionCheckBox(value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
