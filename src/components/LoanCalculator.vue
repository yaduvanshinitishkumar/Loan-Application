<template>
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
</template>

<script>
import RoundedButton from "./layouts/RoundedButton";
import TitledSlider from "./TitledSlider";
export default {
  name: "LoanCalculator",
  components: { TitledSlider, RoundedButton }
};
</script>

<style scoped>

</style>