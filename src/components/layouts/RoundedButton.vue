<template>
  <q-btn
    :unelevated="unelevated"
    :outline="isOutLine"
    :flat="isFlat"
    :label="label"
    :color="color"
    :text-color="textColor"
    :icon="leftIcon"
    :icon-right="rightIcon"
    @click="onClick"
    :rounded="rounded"
    :style="extraStyle"
  />
</template>

<script>
export default {
  name: "RoundedButton",
  props: {
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "positive"
    },
    textColor: {
      type: String
    },
    isFlat: {
      type: Boolean,
      default: false
    },
    isOutLine: {
      type: Boolean,
      default: false
    },
    unelevated: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String
    },
    rightIcon: {
      type: String
    },
    rounded: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
      required: true
    },
    extraStyle: {
      type: Object,
      default: () => {
      }
    }

  }
};
</script>

<style scoped></style>
