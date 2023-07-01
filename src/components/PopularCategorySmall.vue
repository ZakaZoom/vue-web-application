<template>
    <v-row>
        <div class="card1">
            <v-row>
                <img src="../assets/scp1.svg" alt="category_one" class="category_icon1">
                <div class="text1">
                    {{ title_one }}
                </div>
            </v-row>

        </div>
        <div class="card2">
                <v-row>
                    <img src="../assets/scp2.svg" alt="category_two" class="category_icon2">
                    <div class="text2">
                        {{ title_two }}
                    </div>
                </v-row>
                
        </div>
        <div class="card3">
                <v-row>
                    <img src="../assets/scp3.svg" alt="category_three" class="category_icon3">
                    <div class="text3">
                        {{ title_three }}
                    </div>
                </v-row>
        </div>
    </v-row>
</template>


<script>
export default {
    name: "pcs",
    data: () => ({
        title_one: "Напитки",
        title_two: "Овощи и фрукты",
        title_three: "Рыба и морепродукты"
    })
}
</script>


<style scoped>
.card1 {
    border-radius: 10px;
    background: var(--white, #FFF);
    width: 117px;
    height: 50px;
    flex-shrink: 0;
}
.card2 {
    width: 189px;
    height: 50px;
    flex-shrink: 0;
}
.card3 {
    width: 233px;
    height: 50px;
    flex-shrink: 0;
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
.text2 {
    margin-top: 7px;
    margin-left: 5px;
    color: var(--black, #000);
    text-align: center;
    font-size: 16px;
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.15px;
}

.text3 {
    margin-top: 7px;
    margin-left: 5px;
    color: var(--black, #000);
    text-align: center;
    font-size: 16px;
    font-family: Nunito;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.15px;
}

.category_icon1 {
    width: 11.347px;
    height: 29.478px;
    flex-shrink: 0;
}
.category_icon2 {
    width: 24.003px;
    height: 29.62px;
    flex-shrink: 0;
}
.category_icon3 {
    width: 26.547px;
    height: 29.488px;
    flex-shrink: 0;
}
</style>