<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="bg-primary text-white">
      <q-page-container class="q-px-lg container">
        <AdminHeader />

        <div class="row q-pt-xl">
          <p>Account balance</p>
        </div>

        <div class="row flex justify-between">
          <div>
            <q-chip color="positive">SS</q-chip>
            <strong>3000</strong>
          </div>

          <RoundedButton
            dense color="secondary"
            left-icon="fa fa-plus-circle"
            :on-click="()=>{}"
            is-flat label="New card"
            no-caps
          />

          <q-tabs
            v-model="tab"
            dense
            align="justify"
            class="text-white q-mt-md"
            indicator-color="secondary"
          >
            <q-tab :ripple="false" name="mdc" label="My debit cards" no-caps />
            <q-tab :ripple="false" name="acc" label="All company cards" no-caps />
            <q-tab :ripple="false" name="admin" label="Admin" no-caps />
          </q-tabs>

          <q-tab-panels v-model="tab" animated class="transparent" style="width: 100%">
            <q-tab-panel name="mdc">
              <q-carousel
                v-model="slide"
                swipeable
                animated
                navigation
                navigation-position="bottom"
                height="320px"
                class="transparent text-white rounded-borders"
              >
                <q-carousel-slide name="card" class="column no-wrap flex-center">
                  <div class="bg-positive credit-card">

                    <div class="row flex justify-end q-pt-md q-pr-md">
                      <img :src="require('../../assets/admin/logo-white.svg')" />
                    </div>
                    <div class="row flex justify-start q-pt-md q-pl-md">
                      <strong>Mark Henry</strong>
                    </div>
                    <div class="row flex justify-start q-pt-md q-pl-md">
                      <div class="q-mr-md">
                        <i class="fas fa-circle q-mr-xs credit-card--dot"></i>
                        <i class="fas fa-circle q-mr-xs credit-card--dot"></i>
                        <i class="fas fa-circle q-mr-xs credit-card--dot"></i>
                        <i class="fas fa-circle q-mr-xs credit-card--dot"></i>
                      </div>
                      <div class="q-mr-md">
                        <i class="fas fa-circle q-mr-xs credit-card--dot"></i>
                        <i class="fas fa-circle q-mr-xs credit-card--dot"></i>
                        <i class="fas fa-circle q-mr-xs credit-card--dot"></i>
                        <i class="fas fa-circle q-mr-xs credit-card--dot"></i>
                      </div>
                      <div class="q-mr-md">
                        <i class="fas fa-circle q-mr-xs credit-card--dot"></i>
                        <i class="fas fa-circle q-mr-xs credit-card--dot"></i>
                        <i class="fas fa-circle q-mr-xs credit-card--dot"></i>
                        <i class="fas fa-circle q-mr-xs credit-card--dot"></i>
                      </div>
                      <div class="q-mr-md credit-card--last-digits">
                        <strong class="q-mr-xs">2020</strong>
                      </div>
                    </div>

                    <div class="row flex justify-start q-pt-md q-pl-md">
                      <p>Thru: 12/20</p> <span class="q-ml-lg">CVV: ***</span>
                    </div>
                    <div class="row flex justify-end q-pr-md">
                      <img :src="require('../../assets/admin/Visa Logo.svg')" />
                    </div>

                  </div>
                </q-carousel-slide>
              </q-carousel>
            </q-tab-panel>


            <q-tab-panel name="admin" class="bg-primary">
              <div class="text-h6">Admin</div>
            </q-tab-panel>
          </q-tab-panels>
        </div>


        <div class="item-holder">
          <div class="row flex justify-around bg-white text-grey">

            <div class="column q-pa-sm">
              <img :src="require('../../assets/admin/menu1.svg')" />
              <span>Home</span>
            </div>
          </div>
        </div>


        <!--        FOOTER-->
        <q-footer elevated>
          <div class="row flex justify-around bg-white text-grey">

            <div class="column q-pa-sm">
              <img :src="require('../../assets/admin/menu1.svg')" />
              <span>Home</span>
            </div>
            <div class="column q-pa-sm">
              <img style="margin-top: 2px" :src="require('../../assets/admin/pay.svg')" />
              <span style="margin-top: 5px">Home</span>
            </div>
            <div class="column q-pa-sm">
              <img :src="require('../../assets/admin/Payments.svg')" />
              <span>Home</span>
            </div>
            <div class="column q-pa-sm">
              <img :src="require('../../assets/admin/Credit.svg')" />
              <span>Home</span>
            </div>
            <div class="column q-pa-sm">
              <img :src="require('../../assets/admin/Account.svg')" />
              <span>Home</span>
            </div>

          </div>
        </q-footer>

      </q-page-container>
    </q-page>
  </q-layout>
</template>

<script>
import AdminHeader from "./AdminHeader";
import RoundedButton from "../layouts/RoundedButton";

export default {
  name: "AdminDashboard",
  components: { RoundedButton, AdminHeader },
  data() {
    return {
      tab: "mdc",
      slide: "card"
    };
  }
};
</script>

<style lang="scss" scoped>
.container {

}

.credit-card {
  height: 200px;
  width: 290px;
  border-radius: 12px;

  &--dot {
    font-size: 8px;
  }

  &--last-digits {
    font-weight: bolder;
    margin-top: 1px;
  }
}

</style>