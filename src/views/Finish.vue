<template>
    <div class="onon">
        <h1>恭喜您！</h1>
        <h3>您的信息已经录入完成</h3>
        <img src="../assets/image/wanc.png">
    </div>
</template>

<script>
    export default {
        name: "Finish"
    }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    .onon{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h1,h3{
        text-align: center;
        height: 50px;
        color: #564a4b;
    }
    img{
        width: 90px;
        height: 90px;
        margin: 0 auto;
    }

</style>