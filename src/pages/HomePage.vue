<template>
    <v-col>
        <AddressPopup></AddressPopup>

        
        <!-- <h1 class="first-title">Популярные категории</h1> -->
        
        
        <!-- TODO Add Horizontal Row -->
        <PopularCategorySmall>
        </PopularCategorySmall>
        <!-- TODO Add Horizontal Row -->

        <v-row>
            <h1 class="first-title">Акции</h1>
            <v-spacer></v-spacer>
            <h1 class="see_all">См. все</h1>
        </v-row>
    </v-col>
</template>

<script>
import AddressPopup from '../components/AddressPopup.vue';
import PopularCategorySmall from '../components/PopularCategorySmall.vue';
export default {
    name: "HomePage",
    data: () => ({
        popular_categories: [
            {title: "Напитки", src: "././."},
            {title: "Овощи и фрукты", src: "ю.ю.ю.ю"},
            {title: "Рыбв", src: ""}
        ]
    }),
    components: {AddressPopup, PopularCategorySmall}

}
</script>



<style scoped>
.first-title{
    color: #000;
    text-align: left;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.15px;
}
.see_all {
    color: #000;
    text-align: right;
    font-size: 16px;
    font-family: Nunito;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.15px;
}
</style>