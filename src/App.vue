<template>
  <router-view></router-view>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { useQuasar } from "quasar";

export default {
  name: "App",
  setup() {
    const $q = useQuasar();
    return {
      showNotify(caption, message) {
        $q.notify({
          icon: "fa fa-exclamation",
          message,
          caption,
          color: "pink",
          textColor: "white",
          progress: true,
          timeout: 500
        });
      }
    };
  },
  watch: {
    getErrors(value) {
      this.getErrors.forEach((error) => {
        this.showNotify(error.title, error.message);
      });
      console.log(value);
    }
  },
  methods: {
    ...mapActions(["autoLogin", "setErrorMessage"])
  },
  computed: {
    ...mapGetters(["isAuthenticated", "getErrors", "isErrorActive"])
  },
  created() {
    this.autoLogin();
  }
};
</script>
