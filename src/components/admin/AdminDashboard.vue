<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="bg-primary text-white">
      <q-page-container class="container row">
        <div class="col-3 gt-sm container-left">
          <div class="row text-positive container-left--header">
            <img :src="require('../../assets/admin/Logo.svg')" />
            <span>aspire</span>
          </div>
          <div class="row container-left--subtitle">
            <span>Trusted way of banking for 3,000+ SMEs and startups in Singapore</span>
          </div>

          <div class="col container-left--menu">
            <div class="row q-pa-sm container-left--menu__item">
              <img :src="require('../../assets/admin/menu1.svg')" />
              <span>Home</span>
            </div>
            <div class="row q-pa-sm container-left--menu__item text-positive">
              <img :src="require('../../assets/admin/pay.svg')" />
              <span>Cards</span>
            </div>
            <div class="row q-pa-sm container-left--menu__item">
              <img :src="require('../../assets/admin/Payments.svg')" />
              <span>Payments</span>
            </div>
            <div class="row q-pa-sm container-left--menu__item">
              <img :src="require('../../assets/admin/Credit.svg')" />
              <span>Credit</span>
            </div>
            <div class="row q-pa-sm container-left--menu__item">
              <img :src="require('../../assets/admin/Account.svg')" />
              <span>Settings</span>
            </div>
          </div>
        </div>
        <div class="col container-right">

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
          </div>

          <div style="max-width: 400px">
            <q-tabs
              v-model="tab"
              dense
              align="justify"
              class="q-mt-md container-right--tabs"
              indicator-color="secondary"
            >
              <q-tab :ripple="false" name="mdc" label="My debit cards" no-caps />
              <q-tab :ripple="false" name="acc" label="All company cards" no-caps />
              <q-tab :ripple="false" name="admin" label="Admin" no-caps />
            </q-tabs>
          </div>
          <div class="right-left">
            <!--          Right - LEFT-->
            <div class="q-px-lg col">
              <AdminHeader class="lt-sm" />

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


                    <q-carousel-slide name="card-blue" class="column no-wrap flex-center">
                      <div class="bg-secondary credit-card">

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
              <div class="gt-sm item-holder bg-info">
                <div class="flex no-wrap text-center justify-around text-grey">
                  <div class="column q-pa-sm">
                    <img :src="require('../../assets/admin/Freeze card.svg')" />
                    <span class="q-mt-sm">Freeze card</span>
                  </div>
                  <div class="column q-pa-sm">
                    <img :src="require('../../assets/admin/Set spend limit.svg')" />
                    <span class="q-mt-sm">Set spend limit</span>
                  </div>
                  <div class="column q-pa-sm">
                    <img :src="require('../../assets/admin/GPay.svg')" />
                    <span class="q-mt-sm">Add to GPay</span>
                  </div>
                  <div class="column q-pa-sm">
                    <img :src="require('../../assets/admin/Replace card.svg')" />
                    <span class="q-mt-sm">Replace card</span>
                  </div>
                  <div class="column q-pa-sm">
                    <img :src="require('../../assets/admin/Deactivate card.svg')" />
                    <span class="q-mt-sm">Cancel card</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <!--          Right - Right-->
              <div class="drawer">

                <div class="lt-sm item-holder bg-info">
                  <div class="flex no-wrap text-center justify-around text-grey">
                    <div class="column q-pa-sm">
                      <img :src="require('../../assets/admin/Freeze card.svg')" />
                      <span class="q-mt-sm">Freeze card</span>
                    </div>
                    <div class="column q-pa-sm">
                      <img :src="require('../../assets/admin/Set spend limit.svg')" />
                      <span class="q-mt-sm">Set spend limit</span>
                    </div>
                    <div class="column q-pa-sm">
                      <img :src="require('../../assets/admin/GPay.svg')" />
                      <span class="q-mt-sm">Add to GPay</span>
                    </div>
                    <div class="column q-pa-sm">
                      <img :src="require('../../assets/admin/Replace card.svg')" />
                      <span class="q-mt-sm">Replace card</span>
                    </div>
                    <div class="column q-pa-sm">
                      <img :src="require('../../assets/admin/Deactivate card.svg')" />
                      <span class="q-mt-sm">Cancel card</span>
                    </div>
                  </div>
                </div>


                <div>
                  <div class="credit-card-details flex justify-between q-pa-lg q-ma-md bg-info text-black">
                    <div class="flex flex-center">
                      <img :src="require('../../assets/admin/Card details.svg')" />
                      <span class="q-ml-md">Card details</span>
                    </div>
                    <div>
                      <img :src="require('../../assets/admin/down-arrow.svg')" />
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="recent-transactions flex justify-between q-pa-lg q-ma-md bg-info text-black">
                    <div class="flex flex-center">
                      <img :src="require('../../assets/admin/left-right-arrow.svg')" />
                      <span class="q-ml-md">Recent transactions</span>
                    </div>
                    <div>
                      <img :src="require('../../assets/admin/up-arrow.svg')" />
                    </div>
                  </div>
                  <q-card flat>
                    <div class="row text-black flex justify-between q-pa-lg">
                      <div class="flex">
                        <div class="q-pa-md bg-info circular-image">
                          <img :src="require('../../assets/admin/file-storage.svg')" />
                        </div>
                        <div class="q-ml-sm">
                          <span>Hamleys</span><br>
                          <span>20 May 2020</span>
                          <div class="flex q-mt-sm">
                            <div class="bg-primary caption-circular-image">
                              <img :src="require('../../assets/admin/business-and-finance.svg')" />
                            </div>
                            <span class="q-ml-sm">Refund on debit card</span>
                          </div>
                        </div>
                      </div>

                      <div class="text-positive">
                        <span>+$$ 150</span>
                      </div>
                    </div>
                  </q-card>

                  <q-card flat class="q-mt-sm">
                    <div class="row text-black flex justify-between q-pa-lg">
                      <div class="flex">
                        <div class="q-pa-md bg-info circular-image">
                          <img :src="require('../../assets/admin/file-storage.svg')" />
                        </div>
                        <div class="q-ml-sm">
                          <span>Hamleys</span><br>
                          <span>20 May 2020</span>
                          <div class="flex q-mt-sm">
                            <div class="bg-primary caption-circular-image">
                              <img :src="require('../../assets/admin/business-and-finance.svg')" />
                            </div>
                            <span class="q-ml-sm">Refund on debit card</span>
                          </div>
                        </div>
                      </div>

                      <div class="text-positive">
                        <span>+$$ 150</span>
                      </div>
                    </div>
                  </q-card>
                </div>

              </div>
            </div>
          </div>

          <!--        FOOTER-->
          <q-footer elevated class="lt-md">
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
        </div>

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
  &-left {
    padding-left: 50px;

    &--header {
      display: flex;
      align-items: center;
      padding-top: 50px;

      & > img {
        height: 40px;
        width: 40px;
      }

      & > span {
        font-size: 34px;
        margin-left: 10px;
      }
    }

    &--subtitle {
      font-size: 18px;
      color: grey;
      margin-top: 20px;
      width: 80%;
    }

    &--menu {
      display: flex;
      flex-direction: column;
      margin-top: 50px;

      > div {
        padding-bottom: 50px;
        font-size: 20px;
      }

      &__item {
        display: flex;

        & > img {
          margin-right: 20px;
        }
      }
    }
  }

  &-right {

    &--tabs {

    }
  }
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

.drawer {
  background-color: white;
  padding-bottom: 30px;

  &--item-holder {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-top: 20px;
  }

  .credit-card-details {
    border-radius: 10px;
  }

  .recent-transactions {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .card {

  }

  .circular-image {
    background-color: #23CEFD;
    border-radius: 50px;
    height: 50px;
    width: 50px;
  }

  .caption-circular-image {
    border-radius: 100px;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (min-width: 1024px) {
  .q-tab__label {
    color: black !important;
  }
  .container {
    .item-holder {
      border-radius: 20px;
      padding: 10px;
    }

    &-right {
      background-color: white;
      color: black;
      height: 100vh;
      padding: 20px;

      &--tabs {
        color: black !important;
      }
    }
  }

  .right-left{
    display: flex;
  }


}

</style>