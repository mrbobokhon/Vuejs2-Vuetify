<template>
  <div class="home">
    <Carousel />
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="3"
          v-for="(l, id) in 8"
          :key="l"
        >
          <strong></strong>
          <v-card class="mt-5 mx-auto" max-width="344" shaped>
            <v-img :src="images[id]" height="200px"></v-img>

            <v-card-title> Top western road trips </v-card-title>

            <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

            <v-card-actions>
              <router-link :to="{ name: 'cafedetails', params: { id: l } }">
                <v-btn depressed color="orange lighten-1" text> Explore </v-btn>
              </router-link>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than
                  he could deliver. You won't have time for sleeping, soldier,
                  not with all the bed making you'll be doing. Then we'll go
                  with that data file! Hey, you add a one and two zeros to that
                  or we walk! You're going to do his laundry? I've got to find a
                  way to escape.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
export default {
  name: "Home",
  data() {
    return {
      show: false,
      images: [
        require("@/assets/images/bg.jpeg"),
        require("@/assets/images/food-1.jpg"),
        require("@/assets/images/food-2.jpg"),
        require("@/assets/images/food-3.jpg"),
        require("@/assets/images/carusel1.jpeg"),
        require("@/assets/images/carusel2.jpeg"),
        require("@/assets/images/carusel3.jpeg"),
        require("@/assets/images/carusel4.jpg"),
      ],
    };
  },
  components: {
    Carousel: Carousel,
  },
  mounted() {},
};
</script>

<style>
.home{
  /* background: #000; */
}
</style>
