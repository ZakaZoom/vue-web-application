<template>
    <div class="card">
        <div class="category_name">
            {{ title }}
            
        </div>
    </div>
</template>


<script>
export default {
    name: "pcs",
    data: () => ({
        title: "TestTitle"
    })
}
</script>


<style scoped>
.card {
    border-radius: 10px;
    background: var(--white, #FFF);
    width: 117px;
    height: 50px;
    flex-shrink: 0;
}
.category_name {
    display: flex;
    width: 64px;
    flex-direction: column;
    flex-shrink: 0;
    color: var(--black, #000);
    text-align: center;
    font-size: 16px;
    font-family: Nunito;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.15px;
}
</style>