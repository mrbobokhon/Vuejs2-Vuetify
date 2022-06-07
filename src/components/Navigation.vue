<template>
  <v-card elevation="5" width="256" height="100%">
    <v-navigation-drawer floating permanent>
      <v-list dense rounded>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
        { title: "Contact", icon: "mdi-contacts-outline"}
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
*{
    font-size: 1.3rem;
}
</style>