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
  created() {
    this.autoLogin();
  }
};
</script>
