<template>
  <q-layout view="lHh Lpr lFf">
    <Header :isLightThemeHeader="false" />
    <q-page-container> </q-page-container>
  </q-layout>
</template>

<script>
import Header from "@/components/layouts/Header.vue";

export default {
  name: "Home",
  components: { Header },
};
</script>
