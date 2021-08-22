<template>
  <q-page-container class="q-px-lg row container">
    <div class="col gt-sm container--left flex flex-center">
      <div class="container--left__background row flex flex-center"
           :style="{ backgroundImage: 'url(' + require('@/assets/shape1.png') + ')' }">
        <div>
          <p class="container--left__title-text text-h2 text-weight-bolder text-positive">Personal loan</p>
          <span class="container--left__subtitle-text text-caption text-weight-bold">Just few clicks away</span>
          <div class="row flex flex-center justify-around q-mt-sm">
            <Stepper label="1" message="Loan calculator" :show-step-description="currentStep === 1" />
            <Stepper label="2" message="Loan confirmation" :show-step-description="currentStep === 2" />
            <Stepper label="3" message="Registration Successful" :show-step-description="currentStep === 3" />
          </div>
        </div>
      </div>
    </div>

    <div class="col container--right">
      <div class="container--right-wrapper">
        <Spacer height="90px" />

        <div class="heading row q-pt-lg flex flex-center">
          <div class="heading--wrapper text-center flex column">
            <span class="heading--wrapper__title text-center text-weight-bold">Loan calculator</span>
            <span class="heading--wrapper__subtitle">Please review and calculate your loan.</span>
          </div>
        </div>

        <router-view></router-view>
      </div>
    </div>

  </q-page-container>
</template>

<script>
import Spacer from "./layouts/Spacer";
import Stepper from "./layouts/Stepper";
import { mapState } from "vuex";

export default {
  name: "LoanApplication",
  components: {
    Stepper, Spacer
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      currentStep: state => state.loanApplication.currentStep
    })
  }


};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;

  &--right {

    &-wrapper {

    }

    & .heading {
      padding: 0 44px;

      &--wrapper {
        &__title {
          font-size: 28px;
        }

        &__subtitle {
          font-size: 16px;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .container {
    padding-top: 60px;

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
      display: flex;
      justify-content: center;
      align-items: center;

      &-wrapper {
        padding: 0 100px;
        background-color: #EDF3FF;
        height: 80%;
        min-height: 700px;
        border-radius: 45px;
      }

      & .heading {
        padding: 0 44px;

        &--wrapper {
          &__title {
            font-size: 28px;
            margin-top: 50px;
          }

          &__subtitle {
          }
        }
      }
    }
  }
}

</style>