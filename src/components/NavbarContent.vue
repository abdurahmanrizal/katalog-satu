<template>
  <div>
    <b-container class="p-4 mt-5">
      <b-row>
        <b-col cols="8">
          <div class="parent-tagline">
            <p class="mb-2 font-weight-bold company-name">Satu Pintu Kitchen</p>
            <h1 class="tagline font-weight-bold">
              Makan Siang Tanpa Ongkir
            </h1>
            <v-img
              :src="require('../assets/map.png')"
              width="400"
              style="position: absolute;
              left: 0px;
              top: 0px;
              z-index: -1; margin-left: -5rem; "
            >
            </v-img>
          </div>
        </b-col>
        <b-col cols="4">
          <b-img
            :src="require('../assets/BA.png')"
            width="400"
            style="margin-top: -5rem"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style>
.parent-tagline {
  margin-top: 8rem;
}
.tagline {
  color: #f71616;
}
</style>
