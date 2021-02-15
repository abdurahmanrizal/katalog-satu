<template>
  <div>
    <br />
    <br />
    <br />
    <v-footer style="background-color: #ee3035" padless class="p-3">
      <v-row justify="center" no-gutters>
        <div class="d-block mx-auto">
          <b-img
            :src="require('../assets/logo-footer.png')"
            width="80"
            class="d-block mx-auto mt-3"
          ></b-img>
          <v-btn
            v-for="(link, i) in links"
            :key="i"
            text
            rounded
            class="my-3 text-light"
            @click="redirectSocialMedia(link.url)"
          >
            {{ link.name }}
          </v-btn>
        </div>

        <v-col
          class="py-1 text-center white--text"
          cols="12"
          style="font-size: 14px"
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
