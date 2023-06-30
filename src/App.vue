<script setup>
import {mdiAccount, mdiHeart,} from "@mdi/js"
import Logo from "./components/Logo.vue";
import AddressPopup from "./components/AddressPopup.vue";
</script>

<template>
  <v-app id="inspire">

    <v-row align="center"
      justify="center">
        <v-col align-center>
          <!-- <Logo></Logo> -->
          <AddressPopup></AddressPopup>
        </v-col>
    </v-row>
    <v-bottom-navigation grow>
  <v-btn value="recent">
    <v-icon :icon="mdiAccount"></v-icon>

    Recent
  </v-btn>

  <v-btn value="favorites">
    <v-icon :icon="mdiHeart"></v-icon>

    Favorites
  </v-btn>

  <v-btn value="nearby">
    <v-icon>mdi-map-marker</v-icon>

    Nearby
  </v-btn>
</v-bottom-navigation>
  </v-app>
</template>

