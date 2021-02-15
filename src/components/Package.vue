<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h3 class="font-weight-bold text-center" style="color: #f71616">
            Yuk, pilih paket kamu sekarang
          </h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4" v-for="(item, id) in packages" :key="id">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="networkAddress + item.photo" height="200px"></v-img>

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
              <v-btn text class="btn btn-success text-light mb-2">
                Hubungi Admin
              </v-btn>

              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </b-col>
      </b-row>
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
  },
};
</script>
