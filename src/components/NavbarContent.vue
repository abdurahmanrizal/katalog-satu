<template>
  <div>
    <b-container class="p-4 mt-5">
      <b-row>
        <b-col cols="8">
          <div class="parent-tagline">
            <b-img
              :src="require('../assets/logo-header.png')"
              width="300"
              class="d-block mx-auto mb-4"
            >
            </b-img>
            <h1 class="tagline font-weight-bold text-center">
              Makan Siang Tanpa Ongkir
            </h1>
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
