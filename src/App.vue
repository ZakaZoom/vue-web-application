<script setup>
import {mdiAccount, mdiHeart,} from "@mdi/js"
import HomePage from "./pages/HomePage.vue";
import PopularCategoriesSmall2 from "./components/PopularCategoriesSmall2.vue";
import WelcomePage from "./pages/WelcomePage.vue"
</script>

<template>
  <v-app id="inspire" class="container">
    <div class="subcontainer">

      <!-- <PopularCategoriesSmall2></PopularCategoriesSmall2> -->
      <!-- <HomePage></HomePage> -->
      <WelcomePage>
        
      </WelcomePage>

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
    </div>




    

  </v-app>
</template>

<style scoped>
.container {
  width: 100%;
}
.subcontainer { 
  width: 50%;
  margin: auto;
}

</style>