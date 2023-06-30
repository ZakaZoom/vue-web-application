<template>
    <div>
        <AddressPopup></AddressPopup>
        <h1 class="first-title">Популярные категории</h1>
        <PopularCategorySmall>
            
        </PopularCategorySmall>
        <!-- TODO Add Horizontal Row -->
        <v-row>

        </v-row>
    </div>
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
    })

}
</script>



<style scoped>
.first-title{
    color: #000;
    text-align: right;
    font-size: 18px;
    font-family: Nunito;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.15px;
}
</style>