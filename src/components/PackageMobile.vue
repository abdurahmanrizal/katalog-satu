<template>
  <div>
    <b-container>
      <b-row class="mb-2">
        <b-col cols="12">
          <h5 class="font-weight-bold text-center" style="color: #ee3035">
            Yuk, pilih paket kamu sekarang
          </h5>
        </b-col>
      </b-row>

      <splide :slides="packages" :options="options">
        <splide-slide v-for="(item, i) in packages" :key="i">
          <b-img
            :src="networkAddress + item.photo"
            height="150"
            width="200"
            style="border-radius: 15px"
          ></b-img>

          <v-card-title style="font-size: 11px" class="font-weight-bold">
            {{ reduceText(item.name) }}
          </v-card-title>

          <v-card-subtitle>
            <span
              v-if="item.price != 0"
              style="font-size: 10px"
              class="font-weight-bold"
            >
              IDR {{ item.price | numeral("0,0") }}
            </span>
            <span v-else>
              -
            </span>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              text
              class="btn btn-success text-light mb-2 font-weight-bold"
              style="border-radius: 5px; font-size: 10px"
              @click="redirectToWhatsapp(item.name)"
            >
              Hubungi Admin
            </v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>
        </splide-slide>
      </splide>
    </b-container>
  </div>
</template>
<script>
import { network, ip_address } from "../../config";
export default {
  data() {
    return {
      packages: [],
      ipAddress: ip_address,
      networkAddress: network,
      options: {
        perPage: 1,
        perMove: 1,
        pagination: false,
        gap: ".8rem",
        autoWidth: true,

        padding: {
          right: "5rem",
          left: "5rem",
        },
        trimSpace: false,
      },
    };
  },
  mounted() {
    this.getPackages();
  },
  methods: {
    getPackages() {
      this.$axios.get(this.ipAddress + "data/package").then((response) => {
        this.packages = response.data.packages;
      });
    },
    redirectToWhatsapp(packageName) {
      let text = `Hello Satupintu, saya mau berlangganan makan siang paket ${packageName} 😀😀`;
      let url =
        `https://api.whatsapp.com/send?phone=6281211539703&text=` +
        encodeURIComponent(text);

      window.open(url, "_blank");
    },
    reduceText(text) {
      if (text.length > 29) {
        return text.slice(0, 27) + "..";
      } else {
        return text;
      }
    },
  },
};
</script>
<style>
ul.splide__list {
  margin-left: -4rem !important;
}
</style>
