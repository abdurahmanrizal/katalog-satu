<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h3 class="font-weight-bold text-center" style="color: #ee3035">
            Pilih menu kamu sekarang
          </h3>
        </b-col>
      </b-row>
      <b-row style="cursor: pointer">
        <b-col
          v-for="(category, i) in categoryMenus"
          :key="i"
          @click="chooseMenu(category.name)"
          :class="{ red: category.name == active }"
        >
          <v-img
            :src="category.src"
            width="40"
            class="d-block mx-auto mb-2"
          ></v-img>
          <p class="font-weight-bold text-center" style="font-size: 12.5px">
            {{ category.name }}
          </p>
        </b-col>
      </b-row>
      <b-row v-if="menus.length != 0">
        <b-col cols="4" v-for="(item, id) in menus.slice(0, 3)" :key="id">
          <v-img
            :src="networkAddress + item.photo"
            height="200px"
            max-width="344"
            style="border-radius: 10px"
          ></v-img>

          <v-card-title
            class="font-weight-bold"
            style="margin-left: -1rem; font-size: 17px"
          >
            {{ item.name }}
          </v-card-title>

          <v-card-subtitle style="margin-left: -1rem;">
            <b-badge variant="danger" class="py-2 mt-2" style="font-size: 14px"
              ><strong>IDR {{ item.price | numeral("0,0") }}</strong></b-badge
            >
          </v-card-subtitle>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col>
          <b-img
            :src="require('../assets/feeding.png')"
            width="150"
            class="d-block mx-auto"
          ></b-img>
          <h5 class="font-weight-bold text-center mt-2">
            Maaf nih, menu belum tersedia
            <b-img
              :src="require('../assets/cry.png')"
              width="30"
              class="ml-2"
            ></b-img>
          </h5>
        </b-col>
      </b-row>
      <v-btn
        elevation="2"
        class="mt-3 mb-2 float-right text-light"
        style="background-color: green !important"
        v-if="menus.length != 0"
      >
        <b-skeleton-icon
          icon="phone-vibrate"
          :icon-props="{ fontScale: 1.5, variant: 'light' }"
        ></b-skeleton-icon>
        <span class="ml-2" @click="redirectToWhatsapp">hubungi kami</span>
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
      active: "",
      categoryMenus: [
        {
          name: "Bento Premium",
          src: require("../assets/menu/bento-premium.png"),
        },
        { name: "Bento Reguler", src: require("../assets/menu/bento.png") },
        { name: "Paket Hemat", src: require("../assets/menu/price-tag.png") },
        {
          name: "Special Bowl",
          src: require("../assets/menu/special-bowl.png"),
        },
        { name: "Bowl", src: require("../assets/menu/bowl.png") },
        { name: "Fried", src: require("../assets/menu/fried.png") },
        {
          name: "Healthy Premium",
          src: require("../assets/menu/healthy-premium.png"),
        },
        {
          name: "Healthy Reguler",
          src: require("../assets/menu/healthy-reguler.png"),
        },
      ],
    };
  },
  mounted() {
    this.getMenus();
  },
  methods: {
    chooseMenu(val) {
      this.$axios
        .get(this.ipAddress + "data/list-menu/" + val)
        .then((response) => {
          this.menus = response.data.menus;
          this.active = val;
        });
    },
    getMenus() {
      this.$axios.get(this.ipAddress + "data/menu").then((response) => {
        this.menus = response.data.menus;
      });
    },
    redirectToWhatsapp() {
      window.open("https://wa.link/6xoliw", "_blank");
    },
  },
};
</script>
<style>
.theme--light.v-btn.v-btn--has-bg {
  background-color: teal !important;
}
</style>
