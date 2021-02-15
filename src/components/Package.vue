<template>
  <div>
    <b-container>
      <b-row class="mb-2">
        <b-col cols="12">
          <h3 class="font-weight-bold text-center" style="color: #ee3035">
            Yuk, pilih paket kamu sekarang
          </h3>
        </b-col>
      </b-row>

      <splide :slides="packages" :options="options">
        <splide-slide v-for="(item, i) in packages" :key="i">
          <v-img
            :src="networkAddress + item.photo"
            height="200px"
            max-width="344"
            style="border-radius: 15px"
          ></v-img>

          <v-card-title style="font-size: 15px" class="font-weight-bold">
            {{ item.name }}
          </v-card-title>

          <v-card-subtitle class="font-weight-bold">
            <span v-if="item.price != 0">
              IDR {{ item.price | numeral("0,0") }}
            </span>
            <span v-else>
              -
            </span>
          </v-card-subtitle>

          <v-card-actions>
            <v-btn
              text
              class="btn btn-success text-light mb-2"
              style="border-radius: 15px"
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
        perPage: 3,
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
  },
};
</script>
<style>
ul.splide__list {
  margin-left: -4rem !important;
}
</style>
