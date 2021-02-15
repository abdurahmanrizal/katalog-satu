<template>
  <div id="app">
    <div v-if="checkMobile">
      <NavbarMobile />
      <NavbarContentMobile />
      <PackageMobile />
      <MenuMobile />
      <FooterMobile />
    </div>
    <div v-else>
      <Navbar />
      <NavbarContent />
      <Package />
      <Menu />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import NavbarContent from "./components/NavbarContent";
import NavbarContentMobile from "./components/NavbarContentMobile";
import Package from "./components/Package";
import PackageMobile from "./components/PackageMobile";
import Menu from "./components/Menu";
import MenuMobile from "./components/MenuMobile";
import Footer from "./components/Footer";
import FooterMobile from "./components/FooterMobile";
import { isMobile } from "mobile-device-detect";

export default {
  name: "App",
  components: {
    Navbar,
    NavbarMobile,
    NavbarContent,
    NavbarContentMobile,
    Package,
    PackageMobile,
    Menu,
    MenuMobile,
    Footer,
    FooterMobile,
  },
  data() {
    return {
      checkMobile: isMobile,
    };
  },
};
</script>
