<template>
  <q-layout view="lHh Lpr lFf">
    <!--    <div class="row home flex flex-center">-->
    <Header :isLightThemeHeader="true" />
    <div class="flex flex-center">
      <h1>Profile Page</h1>

    </div>
    <div class="flex flex-center">
      <h3>Hi! {{ username }}</h3>
    </div>

    <div class="column q-mx-xl">
      <div :key="index" v-for="(application,index) in loanApplications">
        <q-card>
          <div class="q-pa-lg">
            <p><strong>Amount</strong>: {{ application.amount }}</p>
            <p><strong>Payment Period</strong>: {{ application.paymentPeriod }}</p>
            <p><strong>Monthly Payment</strong>: {{ application.monthlyPayment }}</p>
            <p><strong>Monthly Payment</strong>: {{ application.monthlyPayment }}</p>
            <p><strong>Currency</strong>: {{ application.currency }}</p>
            <q-btn @click="() => this.approveLoan(application.username)" color="positive">Approve Loan</q-btn>
          </div>
        </q-card>
      </div>
    </div>

    <div class="q-mt-lg" v-if="isAdmin">
      <div v-if="currentLoanData" class="flex flex-center">
        <RoundedButton :on-click="() => {}" color="primary" label="Loan Repay" no-caps />
      </div>
      <div v-else class="flex flex-center">
        <strong>Admin! No user have applied any load application yet</strong>
      </div>
    </div>
    <div v-else>
      <div v-if="currentLoanData" class="flex flex-center">
        <RoundedButton :on-click="() => {}" color="primary" label="Loan Repay" no-caps />
      </div>
      <div v-else class="flex flex-center">
        <strong>No Loan Application available yet. Please apply for a loan.</strong>
      </div>
    </div>


  </q-layout>
</template>

<script>
import Header from "./layouts/Header";
import RoundedButton from "./layouts/RoundedButton";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Profile",
  components: { RoundedButton, Header },
  data() {
    return {
      currentLoanData: null,
      loanApplications: []
    };
  },
  computed: {
    ...mapState({
      username: state => state.auth.username
    }),
    ...mapGetters(["isAdmin"])
  },
  methods: {
    getCurrentUserLoanData() {
      try {
        // NOTE this is just a dummy: This should not be done.
        const loanDataArray = localStorage.getItem("applicationData");
        const applicationDatas = JSON.parse(loanDataArray);
        const userLoanApplication = applicationDatas.find(application => application.username === this.username);
        if (userLoanApplication.isApproved) {
          this.currentLoanData = userLoanApplication;
        }
        if (this.isAdmin) {
          this.loanApplications = applicationDatas;
        }
      } catch (e) {
        console.log(e);
      }
    },
    approveLoan(username) {
      try {
        // NOTE this is just a dummy: This should not be done.
        const loanDataArray = localStorage.getItem("applicationData");
        const applicationDatas = JSON.parse(loanDataArray);
        const userApplicationToApprove = applicationDatas.find(application => application.username === username);
        userApplicationToApprove.isApproved = true;
        debugger;
        localStorage.setItem("applicationData", JSON.stringify(applicationDatas));
        if (this.isAdmin) {
          this.loanApplications = applicationDatas;
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    this.getCurrentUserLoanData();
  }
};
</script>

<style scoped>

</style>