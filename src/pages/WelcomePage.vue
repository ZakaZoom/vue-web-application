<template>
    <v-row align="center"
      justify="center">
        <v-col align-center>
          <Logo></Logo>
        </v-col>
    </v-row>
</template>



<script>
import Logo from '../components/Logo.vue';
export default {
    name: "WelcomePage",
    components: {Logo}
}
</script>