<template>
        <h1>Популярные категории</h1>
    <v-card width="117">
        <div class="container">
            <div class="icon">
                <img src="../assets/scp1.svg" alt="category_one" class="category_icon1">
            </div>
            <div class="text">Напитки</div>
        </div>
    </v-card>

    
</template>

<script>
export default {
    name: "PopularCategoriesSmall2"
}
</script>

<style scoped>
.container {
    /* display: flex;*/
    height: 50px;
    width: 120px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(10px, auto);

}
.icon {
    margin-top: 7px;
    margin-right: 15px;
    grid-column: 1 / 3;
    grid-row: 1;
}
.text {
    margin-right: 20px;
    margin-top: 10px;
    grid-column: 2/ 4;
    grid-row: 1 / 3;
}
.text1 {
    margin-top: 7px;
    margin-left: 5px;
    flex-shrink: 0;
    color: var(--black, #000);
    text-align: center;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.15px;
}
.category_icon1 {
    width: 11.347px;
    height: 29.478px;
    flex-shrink: 0;
}
</style>
