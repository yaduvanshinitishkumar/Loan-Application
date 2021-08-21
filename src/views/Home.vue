<template>
  <q-layout view="lHh Lpr lFf" class="bg-primary">
    <Header :isLightThemeHeader="false" />

    <div class="container" :style="{ backgroundImage: 'url(' + require('@/assets/shape1.png') + ')' }">
      <q-page class="flex flex-center">
        <q-page-container class="col">
          <q-card flat class="transparent q-px-xl q-mb-xl">
            <q-card-section>
              <InputField placeholder="Username" />
              <InputField class="q-mt-md" placeholder="Password" type="password" />
            </q-card-section>
            <q-card-section class="flex flex-center">
              <RoundedButton label="Login" :on-click="() => {}" textColor="white" />
            </q-card-section>
          </q-card>
        </q-page-container>
      </q-page>
    </div>


  </q-layout>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import InputField from "../components/layouts/InputField.vue";
import RoundedButton from "../components/layouts/RoundedButton";

export default {
  name: "Home",
  components: { RoundedButton, Header, InputField },
  date() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
