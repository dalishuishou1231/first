<template>
    <div class="home">
        <div class="all">
            <div class="title">请选择您的性别</div>
            <div class="book">
                <div :class="index==true?'girl':'ongirl'" @click="changegirl()"></div>
                <div :class="index==true?'onboy':'boy'" @click="changeboy()"></div>
                <div class="clickk"><img src="../assets/image/anniuyou.png"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index: true,
            }
        },
        created() {
        },
        methods: {
            changegirl() {
                this.index = !this.index
                this.$router.push({name: 'women'})
            },
            changeboy() {
                this.index = !this.index
                this.$router.push({name: 'men'})
            }
        }
    }
</script>
<style>
    * {
        padding: 0;
        margin: 0;
        height: 100%;
    }

    .home {
        display: flex;
        width: 100%;
        height: 100%;

    }

    .all {
        flex-shrink: 1;
        flex-basis: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        background: url("../assets/image/beij.png") no-repeat;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-size: cover;
    }

    .title {
        color: #544444;
        font-size: 20px;
        line-height: 70px;
        height: 70px;
    }

    .book {
        background: url("../assets/image/baisebeij.png") no-repeat;
        width: 100%;
        height: 100%;
        margin-left: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
    }

    .girl {
        background: url("../assets/image/quannb.png") no-repeat;
        width: 100%;
        background-position: center 40%;
    }

    .ongirl {
        background: url("../assets/image/nb.png") no-repeat;
        width: 100%;
        background-position: center 40%;
    }

    .boy {
        background: url("../assets/image/nanna.png") no-repeat;
        width: 100%;
        background-position: center 0;
    }

    .onboy {
        background: url("../assets/image/nan.png") no-repeat;
        width: 100%;
        background-position: center 0;
    }
    .clickk{
        width: 10%;
        height: 10%;
        position: absolute;
        right: 40px;
        top: 240px;
    }
</style>
