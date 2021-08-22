<template>
  <q-layout view="lHh Lpr lFf" class="bg-primary">
    <!--    <div class="row home flex flex-center">-->
    <Header :isLightThemeHeader="false" />

    <q-page-container class="bg-primary">
      <q-page class="home">
        <div class="row fullscreen">

          <!--          Left Section -->
          <div class="home--left col-6 gt-sm bg-white flex flex-center">
            <div class="home--left__background row flex flex-center"
                 :style="{ backgroundImage: 'url(' + require('@/assets/shape1.png') + ')' }">
              <div>
                <p class="home--left__title-text text-h2 text-weight-bolder text-positive">Personal loan</p>
                <span class="home--left__subtitle-text text-caption text-weight-bold">Just few clicks away</span>
              </div>
            </div>
          </div>

          <!--          Right Section -->
          <div class="home--right col flex flex-center"
               :style="{ backgroundImage: 'url(' + require('@/assets/shape1.png') + ')' }">
            <div class="row full-width self-center justify-center">
              <q-card flat class="col-xs-11 col-sm-8  home--right__card q-px-xl q-mb-xl">
                <q-card-section class="text-center">
                  <h5 class="text-positive text-weight-bolder">Login</h5>
                </q-card-section>
                <q-card-section>
                  <InputField placeholder="Username" />
                  <InputField class="q-mt-md" placeholder="Password" type="password" />
                </q-card-section>
                <q-card-section class="text-center">
                  <RoundedButton label="Login" :on-click="() => {}" textColor="white" />
                </q-card-section>
              </q-card>
            </div>
          </div>

        </div>
      </q-page>

    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import InputField from "../components/layouts/InputField.vue";
import RoundedButton from "../components/layouts/RoundedButton";

export default {
  name: "Home",
  components: {
    Header,
    InputField,
    RoundedButton
  },
  date() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.home {
  &--left {
    &__background {
      & > div {
        margin-bottom: 120px;
      }

      margin-bottom: 100px;
      height: 500px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

  }

  &--right {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    @media only screen and (min-width: 1023px) {
      background-image: none !important;
    }
  }
}
</style>
