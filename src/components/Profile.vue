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

    <div class="flex flex-center">
      <div :key="key" v-for="(value,key) in currentLoanData">
        <div>
          <p> {{ key }} <strong> - {{ value }} | </strong></p> <br>
        </div>
      </div>
    </div>

    <div class="flex flex-center">
      <RoundedButton :on-click="() => {}" color="primary" label="Loan Repay" no-caps />
    </div>

  </q-layout>
</template>

<script>
import Header from "./layouts/Header";
import RoundedButton from "./layouts/RoundedButton";
import { mapState } from "vuex";

export default {
  name: "Profile",
  components: { RoundedButton, Header },
  data() {
    return {
      currentLoanData: null
    };
  },
  computed: {
    ...mapState({
      username: state => state.auth.username
    })
  },
  methods: {
    getCurrentUserLoanData() {
      try {
        const loanData = localStorage.getItem(this.username);
        const data = JSON.parse(loanData);
        this.currentLoanData = data;
        debugger;
        console.log(loanData);
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