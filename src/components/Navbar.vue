<template>
  <div>
    <v-card flat tile>
      <v-toolbar dense>
        <v-toolbar-title>Assorti</v-toolbar-title>

        <v-spacer></v-spacer>

        <router-link
          :to="{ name: 'home' }"
          class="nav-link mr-3"
          :class="$route.name === 'home' ? 'active' : ''"
          >Home</router-link
        >

        <router-link
          :to="{ name: 'about' }"
          class="nav-link"
          :class="$route.name === 'about' ? 'active' : ''"
          >About</router-link
        >

        <router-link
          :to="{ name: 'cafeform' }"
          class="nav-link mx-3 btn btn-"
          :class="$route.name === 'cafeform' ? 'active' : ''"
          >CafeForm</router-link
        >

        <v-icon class="mx-3">mdi-facebook</v-icon>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn
          icon
          @click="like = !like"
          :style="like ? 'color: red' : 'color: '"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      like: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  text-decoration: none;
  color: #828181;
  font-size: 1.2rem;
}
.nav-link:hover {
  color: #000;
}
.active {
  color: #000;
}
</style>