<template>
  <div>
    <b-navbar toggleable="lg" class="p-3">
      <b-img
        :src="require('../assets/logo-header.png')"
        width="150"
        class="d-block mx-auto"
      ></b-img>
    </b-navbar>
  </div>
</template>
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
