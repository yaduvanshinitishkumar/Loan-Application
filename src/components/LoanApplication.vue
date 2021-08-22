<template>
  <q-page-container class="q-px-lg row container">
    <div class="col gt-sm container--left flex flex-center">
      <div class="container--left__background row flex flex-center"
           :style="{ backgroundImage: 'url(' + require('@/assets/shape1.png') + ')' }">
        <div>
          <p class="container--left__title-text text-h2 text-weight-bolder text-positive">Personal loan</p>
          <span class="container--left__subtitle-text text-caption text-weight-bold">Just few clicks away</span>
          <div class="row flex flex-center justify-around q-mt-sm">
            <div class="q-mr-md">
              <RoundedButton class="q-mr-md" :on-click="()=>{}" label="1" style="border-radius: 100%" color="white"
                             text-color="black" />
              <span v-if="currentStep === 1">Loan calculator</span>
            </div>
            <div class="q-mr-md">
              <RoundedButton class="q-mr-md" :on-click="()=>{}" label="2" style="border-radius: 100%" color="white"
                             text-color="black" />
              <span v-if="currentStep === 2">Loan confirmation</span>
            </div>
            <div class="q-mr-md">
              <RoundedButton class="q-mr-md" :on-click="()=>{}" label="3" style="border-radius: 100%" color="white"
                             text-color="black" />
              <span v-if="currentStep === 3">Completed</span>
            </div>
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

        <div class="row q-mt-lg">
          <RoundedButton color="white" label="INR" text-color="black" :on-click="() => {}" />
          <RoundedButton color="white" label="EUR" :is-flat="true" text-color="black" :on-click="() => {}" />
        </div>

        <TitledSlider
          title="Loan Amount"
          button-post-fix="INR"
          :min="0"
          :max="15000"
          min-value-caption="5,000 INR"
          max-value-caption="15,000 INR"
        />

        <TitledSlider
          title="Payment period"
          button-post-fix="months"
          :min="0"
          :max="15000"
          min-value-caption="3 months"
          max-value-caption="24 months"
        />

        <div class="row flex justify-end q-mt-md">
          <RoundedButton
            label="591 INR"
            color="black"
            :is-out-line="true"
            style="border-radius: 30px;"
            on-click="() => {}"
          />
        </div>

        <div class="row flex flex-center q-mt-xl">
          <RoundedButton
            label="Next"
            style="border-radius: 30px;"
            on-click="() => {}"
            right-icon="fa fa-arrow-right"
          />
        </div>
      </div>
    </div>

  </q-page-container>
</template>

<script>
import Spacer from "./layouts/Spacer";
import RoundedButton from "./layouts/RoundedButton";
import TitledSlider from "./TitledSlider";

export default {
  name: "LoanApplication",
  components: { TitledSlider, RoundedButton, Spacer },
  data(){
    return {
      currentStep: 1
    }
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