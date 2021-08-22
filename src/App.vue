<template>
  <router-view></router-view>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["autoLogin"])
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  mounted() {
    this.autoLogin();
    console.log(this.isAuthenticated)
    if (this.isAuthenticated) {
      this.$router.push({ name: "LoanCalculator" });
    } else {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
