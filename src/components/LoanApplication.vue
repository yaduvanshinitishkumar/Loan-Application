<template>
  <q-page-container class="q-px-lg">
    <Spacer height="90px" />

    <div class="container row q-pt-lg flex flex-center">
      <div class="container--heading text-center flex column">
        <span class="container--heading--title text-center text-weight-bold">Loan calculator</span>
        <span class="container--heading--subtitle">Please review and calculate your loan.</span>
      </div>
    </div>

    <div class="row q-mt-lg">
      <RoundedButton color="white" label="INR" text-color="black" :on-click="() => {}" />
      <RoundedButton color="white" label="EUR" :is-flat="true" text-color="black" :on-click="() => {}" />
    </div>

    <TitledSlider
      title="Loan Amount"
      button-post-fix="INR"
      :min="5000"
      :max="15000"
      min-value-caption="5,000 INR"
      max-value-caption="15,000 INR"
    />

    <TitledSlider
      title="Payment period"
      button-post-fix="months"
      :min="5000"
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

  </q-page-container>
</template>

<script>
import Spacer from "./layouts/Spacer";
import RoundedButton from "./layouts/RoundedButton";
import TitledSlider from "./TitledSlider";

export default {
  name: "LoanApplication",
  components: { TitledSlider, RoundedButton, Spacer }

};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 44px;

  &--heading {
    &--title {
      font-size: 28px;
    }

    &--subtitle {
      font-size: 16px;
    }
  }
}

</style>