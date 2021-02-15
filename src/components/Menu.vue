<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h3 class="font-weight-bold text-center" style="color: #f71616">
            Pilih menu kamu sekarang
          </h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col @click="chooseMenu(1)">
          <v-img
            :src="require('../assets/menu/bento-premium.png')"
            width="40"
            class="d-block mx-auto mb-2"
          ></v-img>
          <p
            class="font-weight-bold text-center active-item"
            style="font-size: 12.5px"
          >
            Bento Premium
          </p>
        </b-col>
        <b-col @click="chooseMenu(2)">
          <v-img
            :src="require('../assets/menu/bento.png')"
            width="40"
            class="d-block mx-auto mb-2"
          ></v-img>
          <p class="font-weight-bold text-center" style="font-size: 12.5px">
            Bento Reguler
          </p>
        </b-col>
        <b-col>
          <v-img
            :src="require('../assets/menu/price-tag.png')"
            width="40"
            class="d-block mx-auto mb-2"
          ></v-img>
          <p class="text-center font-weight-bold" style="font-size: 12.5px">
            Paket Hemat
          </p>
        </b-col>
        <b-col>
          <v-img
            :src="require('../assets/menu/special-bowl.png')"
            width="40"
            class="d-block mx-auto mb-2"
          ></v-img>
          <p class="font-weight-bold text-center" style="font-size: 12.5px">
            Special Bowl
          </p>
        </b-col>
        <b-col>
          <v-img
            :src="require('../assets/menu/bowl.png')"
            width="40"
            class="d-block mx-auto mb-2"
          ></v-img>
          <p class="font-weight-bold text-center" style="font-size: 12.5px">
            Bowl
          </p>
        </b-col>
        <b-col>
          <v-img
            :src="require('../assets/menu/bowl-premium.png')"
            width="40"
            class="d-block mx-auto mb-2"
          ></v-img>
          <p class="font-weight-bold text-center" style="font-size: 12.5px">
            Bowl Premium
          </p>
        </b-col>
        <b-col>
          <v-img
            :src="require('../assets/menu/fried.png')"
            width="40"
            class="d-block mx-auto mb-2"
          ></v-img>
          <p class="font-weight-bold text-center" style="font-size: 12.5px">
            Fried
          </p>
        </b-col>
        <b-col>
          <v-img
            :src="require('../assets/menu/healthy-premium.png')"
            width="40"
            class="d-block mx-auto mb-2"
          ></v-img>
          <p class="font-weight-bold text-center" style="font-size: 12.5px">
            Healthy Premium
          </p>
        </b-col>
        <b-col>
          <v-img
            :src="require('../assets/menu/healthy-reguler.png')"
            width="40"
            class="d-block mx-auto mb-2"
          ></v-img>
          <p class="font-weight-bold text-center" style="font-size: 12.5px">
            Healthy Reguler
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4" v-for="(item, id) in menus.slice(0, 3)" :key="id">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="networkAddress + item.photo" height="200px"></v-img>

            <v-card-title class="font-weight-bold">
              {{ item.name }}
            </v-card-title>

            <v-card-subtitle class="font-weight-bold">
              IDR {{ item.price | numeral("0,0") }}
            </v-card-subtitle>
          </v-card>
        </b-col>
      </b-row>
      <v-btn
        elevation="2"
        class="mt-3 mb-2 float-right text-light"
        style="background-color: green !important"
      >
        <b-skeleton-icon
          icon="phone-vibrate"
          :icon-props="{ fontScale: 1.5, variant: 'light' }"
        ></b-skeleton-icon>
        <span class="ml-2">hubungi kami</span>
      </v-btn>
    </b-container>
  </div>
</template>
<script>
import { network, ip_address } from "../../config";
export default {
  data() {
    return {
      menus: [],
      ipAddress: ip_address,
      networkAddress: network,
    };
  },
  mounted() {
    this.getMenus();
  },
  methods: {
    chooseMenu(val) {
      alert(val);
    },
    getMenus() {
      this.$axios.get(this.ipAddress + "data/menu").then((response) => {
        this.menus = response.data.menus;
      });
    },
  },
};
</script>
<style>
.theme--light.v-btn.v-btn--has-bg {
  background-color: teal !important;
}
</style>
