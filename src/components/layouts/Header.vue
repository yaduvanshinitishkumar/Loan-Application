<template>
  <div
    class="q-py-sm row header fixed-top q-pt-lg"
    :class="{
      'transparent text-primary': isLightThemeHeader,
    }"
  >
    <!-- Left Branding -->
    <div class="col q-pl-xl">
      <div class="gt-sm">
        <q-avatar>
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQHw4Jpn0midiA/company-logo_200_200/0/1597287478522?e=2159024400&v=beta&t=oGyrDRachcXisR6fwWv9rU8YEVBiiFkyXwGBDE5_XuM"
          />
        </q-avatar>
        <span class="q-ml-md text-weight-bolder text-h6">ASPIRE</span>
      </div>
    </div>
    <!-- Center Branding -->
    <div
      class="col-7 text-center text-bold"
      :class="{ 'text-white': !isLightThemeHeader }"
    >
      <div class="lt-md">
        <q-avatar>
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQHw4Jpn0midiA/company-logo_200_200/0/1597287478522?e=2159024400&v=beta&t=oGyrDRachcXisR6fwWv9rU8YEVBiiFkyXwGBDE5_XuM"
          />
        </q-avatar>
        <span class="q-ml-md text-weight-bolder text-h6">ASPIRE</span>
      </div>
    </div>
    <!-- Right Action -->
    <div v-if="isAuthenticated" class="col flex justify-end q-pr-xl">
      <q-avatar class="pa-none ma-none" :class="{'text-white':!isLightThemeHeader}">
        <q-btn-dropdown unelevated no-icon-animation dropdown-icon="fa fa-user">
          <q-list>
            <q-item v-if="isAdmin" clickable v-close-popup>
              <q-item-section avatar>
                <q-btn unelevated @click="() => this.$router.push({name:'Profile'})"> Admin</q-btn>
              </q-item-section>
            </q-item>
            <q-item v-if="!isAdmin" clickable v-close-popup>
              <q-item-section avatar>
                <q-btn unelevated @click="() => this.$router.push({name:'Profile'})"> Profile</q-btn>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-btn unelevated @click="handleLogout"> Logout</q-btn>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-avatar>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  props: {
    isLightThemeHeader: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    ...mapActions(["logout"]),
    handleLogout() {
      this.logout();
      this.$router.push({ name: "Home" });
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "isAdmin"])
  }
};
</script>

<style lang="scss" scoped>
.header {
  z-index: 1;
  @media only screen and (min-width: 1023px) {
    //background-color: red !important;
  }
}
</style>
