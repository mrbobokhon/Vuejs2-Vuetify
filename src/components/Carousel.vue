<template>
  <v-carousel v-model="model">
    <v-carousel-item v-for="(img, i) in images" :key="i">
      <v-img :src="images[i]" height="100%" tile> </v-img>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      model: 0,
      images: [
        require("@/assets/images/carousel-1.jpg"),
        require("@/assets/images/carousel-2.jpg"),
        require("@/assets/images/carousel-3.jpg"),

      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>