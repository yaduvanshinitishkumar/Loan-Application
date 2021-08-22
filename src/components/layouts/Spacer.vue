<template>
  <div :style="{height,width}"></div>
</template>

<script>
export default {
  name: "Spacer",
  props: {
    height: {
      type: String
    },
    width: {
      type: String
    }
  }
};
</script>

<style scoped>

</style>