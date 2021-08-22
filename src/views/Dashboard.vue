<template>
  <q-layout view="lHh Lpr lFf">
    <!--    <div class="row home flex flex-center">-->
    <Header :isLightThemeHeader="true" />
    <router-view />
  </q-layout>
</template>

<script>
import Header from "../components/layouts/Header";

export default {
  name: "Dashboard",
  components: { Header }
};
</script>

<style scoped>

</style>