<template>
  <q-input
    class="bg-info q-pl-md"
    v-model="value"
    :placeholder="placeholder"
    :dense="dense"
    :type="type"
    style="border-radius: 10px;"
  />
</template>

<script>
export default {
  name: "InputField",
  date() {
    return {
      value: ""
    };
  },
  props: {
    placeholder: {
      type: String
    },
    dense: {
      type: Boolean
    },
    type: {
      type: String,
      default: "text"
    }
  }
};
</script>
