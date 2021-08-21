<template>
  <q-layout view="lHh Lpr lFf">
    <Header />
    <q-page-container> </q-page-container>
  </q-layout>
</template>

<script>
import Header from "./components/layouts/Header.vue";

export default {
  name: "LayoutDefault",
  components: { Header },
  setup() {
    return {};
  },
};
</script>
