<template>
  <div class="row q-mt-lg">
    <div class="col">
      <div
        v-for="loanDetail in loanDetails" :key="loanDetail.title"
        style="border-bottom: 1px solid #0c365a"
        class="row flex justify-between flex-center q-pb-sm q-mt-lg"
      >
        <span class="text-weight-bold">{{ loanDetail.title }}</span>
        <span class="text-weight-bold">{{ loanDetail.description }}</span>
      </div>

      <div class="row q-mt-sm" style="display: flex; align-items: center;">
        <q-checkbox v-model="confirmTermsAndCondition" label="I agree with" color="teal" />
        <a href="#" class="q-ml-sm">Terms & condition</a>
      </div>

      <div class="flex justify-end">
        <RoundedButton label="590 INR" :on-click="() => {}" :is-out-line="true" style="border-radius: 40px;"
                       color="black" />
      </div>
      <div class="flex justify-between q-mt-xl">
        <RoundedButton
          label="back"
          style="border-radius: 30px;"
          on-click="() => {}"
          left-icon="fa fa-arrow-left"
          flat
          color="black"
        />
        <RoundedButton
          label="Next"
          style="border-radius: 30px;"
          on-click="() => {}"
          right-icon="fa fa-arrow-right"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RoundedButton from "./layouts/RoundedButton";

export default {
  name: "LoanDetailConfirmation",
  components: { RoundedButton },
  data() {
    return {
      loanDetails: [
        { title: "Loan amount", description: "13,000 INR" },
        { title: "Loan currency", description: "INR" },
        { title: "Repay period", description: "36 months" },
        { title: "Monthly payment", description: "590 INR" }
      ],
      confirmTermsAndCondition: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
