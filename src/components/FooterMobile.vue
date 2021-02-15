<template>
  <div>
    <v-footer style="background-color: #ee3035" padless class="p-3">
      <v-row justify="center" no-gutters>
        <div class="d-block mx-auto">
          <b-img
            :src="require('../assets/logo-footer.png')"
            width="50"
            class="d-block mx-auto mt-3"
          ></b-img>
          <v-btn
            v-for="(link, id) in links"
            :key="id"
            text
            rounded
            class="text-light"
            @click="redirectSocialMedia(link.url)"
            style="font-size: 10px"
          >
            {{ link.name }}
          </v-btn>
        </div>

        <v-col
          class="py-2 text-center white--text"
          cols="12"
          style="font-size: 11px"
        >
          <span class="font-weight-bold text-light"
            >{{ new Date().getFullYear() }} -
          </span>

          <strong class="text-light">Satu Pintu Kitchen &copy;</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
<script>
export default {
  data: () => ({
    links: [
      {
        name: "Facebook",
        url: "https://www.facebook.com/SATU-PINTU-ID-103184884362219/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/satupintu_kitchen/",
      },
      { name: "Whatsapp", url: "https://wa.link/6xoliw" },
    ],
  }),
  methods: {
    redirectSocialMedia(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
<style>
.v-btn:not(.v-btn--round).v-size--default {
  padding: 0 13px !important;
}
</style>
