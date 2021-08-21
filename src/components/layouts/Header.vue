<template>
  <q-header
    class="q-py-sm"
    :class="{
      'transparent text-primary': isLightThemeHeader,
    }"
  >
    <q-toolbar-title
      class="text-center text-bold"
      :class="{ 'text-white': !isLightThemeHeader }"
    >
      <q-avatar>
        <img
          src="https://media-exp1.licdn.com/dms/image/C560BAQHw4Jpn0midiA/company-logo_200_200/0/1597287478522?e=2159024400&v=beta&t=oGyrDRachcXisR6fwWv9rU8YEVBiiFkyXwGBDE5_XuM"
        />
      </q-avatar>
      ASPIRE
    </q-toolbar-title>
  </q-header>
</template>

<script>
export default {
  name: "Header",
  props: {
    isLightThemeHeader: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
</style>
