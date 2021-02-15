<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h5 class="font-weight-bold text-center" style="color: #ee3035">
            Pilih menu kamu sekarang
          </h5>
        </b-col>
      </b-row>
      <splide :slides="categoryMenus" :options="options">
        <splide-slide
          v-for="(category, i) in categoryMenus"
          :key="i"
          @click="chooseMenu(category.name)"
          :class="{ red: category.name == active }"
        >
          <b-card @click="chooseMenu(category.name)">
            <b-img
              :src="category.src"
              class="d-block mx-auto mt-2"
              width="50"
            ></b-img>

            <span
              class="d-block mx-auto mt-2 text-center font-weight-bold"
              style="font-size: 11px"
              >{{ category.name }}</span
            >
          </b-card>
        </splide-slide>
      </splide>
      <br />
      <div v-if="menus.length > 0">
        <splide :slides="menus" :options="optionsMenu">
          <splide-slide v-for="(item, i) in menus" :key="i">
            <v-img
              :src="networkAddress + item.photo"
              height="125px"
              width="200px"
              style="border-radius: 10px"
            ></v-img>

            <v-card-title
              class="font-weight-bold"
              style="margin-left: -1rem; font-size: 12px"
            >
              {{ item.name }}
            </v-card-title>

            <v-card-subtitle style="margin-left: -1rem;">
              <b-badge
                variant="danger"
                class="py-2 mt-2"
                style="font-size: 11px"
                ><strong>IDR {{ item.price | numeral("0,0") }}</strong></b-badge
              >
            </v-card-subtitle>
          </splide-slide>
        </splide>
      </div>
      <div v-else>
        <b-row>
          <b-col>
            <b-img
              :src="require('../assets/feeding.png')"
              width="100"
              class="d-block mx-auto"
            ></b-img>
            <h6 class="font-weight-bold text-center mt-2">
              Maaf nih, menu belum tersedia
              <b-img
                :src="require('../assets/cry.png')"
                width="20"
                class="ml-2"
              ></b-img>
            </h6>
          </b-col>
        </b-row>
      </div>
      <div class="text-center">
        <v-btn
          elevation="2"
          class="mt-3 mb-2 text-light"
          style="background-color: green !important"
          v-if="menus.length != 0"
        >
          <b-skeleton-icon
            icon="phone-vibrate"
            :icon-props="{ fontScale: 1.5, variant: 'light' }"
          ></b-skeleton-icon>
          <span class="ml-2" @click="redirectToWhatsapp">hubungi kami</span>
        </v-btn>
      </div>
    </b-container>
    <v-btn
      style="background-color: #ee3035"
      dark
      fixed
      bottom
      :style="{ left: '50%', transform: 'translateX(-50%)' }"
      @click="redirectToWhatsapp"
    >
      <b-img :src="require('../assets/whatsapp.png')" width="20"></b-img>
      <span class="ml-1">Pesan</span>
    </v-btn>
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
      options: {
        type: "slide",
        perPage: 2,
        perMove: 1,
        pagination: false,
        gap: ".5rem",
        autoWidth: true,

        padding: {
          right: "5rem",
          left: "5rem",
        },
      },
      optionsMenu: {
        type: "slide",
        perPage: 1,
        perMove: 2,
        pagination: false,
        gap: ".5rem",
        autoWidth: true,

        padding: {
          right: "5rem",
          left: "5rem",
        },
        arrows: false,
      },
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
