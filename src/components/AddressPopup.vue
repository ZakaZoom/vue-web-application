
<!-- TODO ADD Animation -->


<template>
    <div class="popup">
        
        <p class="question">Заказ на этот адрес?</p>
        <p class="address">{{ address }}</p>
        <div
        class="row">
        <v-btn class="text-black btn" color="#F2F2F2">Нет</v-btn>
        <v-btn class="text-black btn" color="#FFC800">Да</v-btn>
        </div>
    </div>
</template>


<script>
export default{
    name: "AddressPopup",
    // TODO REDO to Props
    data: () => ({
        address: "Test Address"
    })
}
</script>

<style scoped>
.popup {
width: 414px;
height: 188px;
flex-shrink: 0;
border-radius: 0px 0px 20px 20px;
background: var(--white, #FFF);
/* shadow */
box-shadow: 0px 3.390000104904175px 5.639999866485596px 0px rgba(176, 190, 197, 0.32), 0px 8px 13px 0px rgba(176, 190, 197, 0.32);
}

.question {
    display: flex;
    width: 414px;
    flex-direction: column;
    flex-shrink: 0;
    color: var(--black, #000);
    text-align: center;
    font-size: 16px;
    font-family: Inter;
    font-weight: 500;
    margin-bottom: 10px;
    padding-top: 30px;
}

.address {
    display: flex;
    width: 414px;
    flex-direction: column;
    flex-shrink: 0;
    color: var(--black, #000);
    text-align: center;
    font-size: 20px;
    font-family: Nunito;
    font-weight: 800;
}
.row {
    margin-top: 10px;
    justify-content: space-between;
}

.btn {
    margin-top: 17px;
    margin-left: 27px;
    margin-right: 27px;
}

</style>