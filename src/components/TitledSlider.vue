<template>
  <div class="row q-mt-lg">
    <div class="col">
      <div class="row flex justify-between flex-center">
        <span class="text-weight-bold">{{ title }}</span>
        <RoundedButton
          color="white"
          style="border-radius: 20px;"
          :label="`${value} ${buttonPostFix}`"
          text-color="black"
          :on-click="() => {}"
          :extraStyle="{fontWeight:'bolder'}"
        />
      </div>

      <q-slider v-model="value" :min="min" :max="max" />

      <div class="row flex justify-between">
        <span class="text-caption">{{ minValueCaption }}</span>
        <span class="text-caption">{{ maxValueCaption }}</span>
      </div>
    </div>

  </div>
</template>

<script>
import RoundedButton from "./layouts/RoundedButton";

export default {
  name: "TitledSlider",
  components: { RoundedButton },
  data() {
    return {
      value: 10
    };
  },
  props: {
    title: {
      type: String
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    buttonPostFix: {
      type: String,
      default: ''
    },
    minValueCaption: {
      type: String
    },
    maxValueCaption: {
      type: String
    }
  }
};
</script>

<style scoped>

</style>