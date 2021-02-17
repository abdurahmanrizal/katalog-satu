<template>
  <div>
    <b-navbar toggleable="lg" class="p-3">
      <b-navbar-brand href="#">
        <b-img
          :src="require('../assets/logo-header.png')"
          width="200"
          class="ml-3"
        ></b-img>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" active>Beranda</b-nav-item>
        <b-nav-item>
          <v-img
            :src="require('../assets/basket.png')"
            width="25"
            @click="redirectToWhatsapp"
          ></v-img>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  methods: {
    redirectToWhatsapp() {
      window.open("https://wa.link/6xoliw", "_blank");
    },
  },
};
</script>
<style>
.navbar-light .navbar-nav .nav-link {
  color: black !important;
  font-family: "Noto Sans", sans-serif;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #f71616 !important;
  font-family: "Noto Sans", sans-serif;
}
.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: #f71616 !important;
  font-weight: bold;
  font-family: "Noto Sans", sans-serif;
}
</style>
