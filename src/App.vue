<template>
  <div id="app">
    <Navbar />
    <NavbarContent />
    <Package />
    <Menu />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import NavbarContent from "./components/NavbarContent";
import Package from "./components/Package";
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    Navbar,
    NavbarContent,
    Package,
    Menu,
  },
};
</script>
