<template>
  <div class="q-mr-md">
    <RoundedButton
      class="q-mr-md"
      :on-click="()=>{}"
      :label="label"
      style="border-radius:100%"
      color="white"
      text-color="black"
    />
    <span v-if="showStepDescription">{{ message }}</span>
  </div>
</template>

<script>
import RoundedButton from "./RoundedButton";

export default {
  name: "Stepper",
  components: { RoundedButton },
  props: {
    step: {
      type: Number
    },
    label: {
      type: String,
      required: true
    },
    message: {
      type: String
    },
    showStepDescription: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>

</style>