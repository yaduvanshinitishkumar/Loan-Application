<template>
  <q-header
    class="q-py-sm row"
    :class="{
      'transparent text-primary': isLightThemeHeader,
    }"
  >
    <!-- Left Branding -->
    <div class="col"></div>

    <!-- Center Branding -->
    <div
      class="col-7 text-center text-bold"
      :class="{ 'text-white': !isLightThemeHeader }"
    >
      <q-avatar>
        <img
          src="https://media-exp1.licdn.com/dms/image/C560BAQHw4Jpn0midiA/company-logo_200_200/0/1597287478522?e=2159024400&v=beta&t=oGyrDRachcXisR6fwWv9rU8YEVBiiFkyXwGBDE5_XuM"
        />
      </q-avatar>
      ASPIRE
    </div>
    <!-- Right Action -->
    <div class="col flex justify-end q-pr-sm">
      <q-avatar class="pa-none ma-none">
        <q-btn-dropdown no-icon-animation dropdown-icon="fa fa-user">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <q-btn unelevated> Logout</q-btn>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-avatar>
    </div>
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
