<template>
    <div class="home">
        <div class="all">
            <div class="title">请选择您的个人状态</div>
            <div class="book">
                <div :class="indexone==true?'one':'onone'" @click="changeone()">
                    <span :class="indexone==true?'onetext':'ononetext'">备孕中</span>
                </div>
                <div :class="indextwo==true?'two':'ontwo'" @click="changetwo()">
                    <span :class="indextwo==true?'twotext':'ontwotext'">准妈妈</span>
                </div>
                <div :class="indexthree==true?'three':'onthree'" @click="changethree()">
                    <span :class="indexthree==true?'threetext':'onthreetext'">孩子已出生</span>
                </div>
                <div class="clickk" @click="finish()"><img src="../assets/image/anniuyou.png"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                indexone: true,
                indextwo: true,
                indexthree: true,
            }
        },
        created() {
        },
        methods: {
            changeone() {
                this.indexone = !this.indexone
            },
            changetwo() {
                this.indextwo = !this.indextwo
            },
            changethree() {
                this.indexthree = !this.indexthree
            },
            finish(){
                this.$router.push({name: 'finish'})
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

    .one {
        background: url("../assets/image/beyunzhong.png") no-repeat;
        width: 100%;
        background-position: center 30%;
    }
    .onetext{
        text-align: center;
        position: absolute;
        top: 25%;
        left: 45%;
        font-size: 15px;
        color: black;
    }

    .onone {
        background: url("../assets/image/huise.png") no-repeat;
        width: 100%;
        background-position: center 30%;
    }
    .ononetext{
        text-align: center;
        position: absolute;
        top: 25%;
        left: 45%;
        font-size: 15px;
        color: #b0b0b0;
    }

    .two {
        background: url("../assets/image/zhunmam.png") no-repeat;
        width: 100%;
        background-position: center 0;
    }
    .twotext{
        text-align: center;
        position: absolute;
        top: 55%;
        left: 45%;
        font-size: 15px;
        color: black;
    }

    .ontwo {
        background: url("../assets/image/tuer.png") no-repeat;
        width: 100%;
        background-position: center 0;
    }
    .ontwotext{
        text-align: center;
        position: absolute;
        top: 55%;
        left: 45%;
        font-size: 15px;
        color: #b0b0b0;
    }

    .three {
        background: url("../assets/image/haizichus.png") no-repeat;
        width: 100%;
        background-position: center 0;
    }
    .threetext{
        text-align: center;
        position: absolute;
        top: 87%;
        left: 40%;
        font-size: 15px;
        color: black;
    }

    .onthree {
        background: url("../assets/image/haizcshui.png") no-repeat;
        width: 100%;
        background-position: center 0;
    }
    .onthreetext{
        text-align: center;
        position: absolute;
        top: 87%;
        left: 40%;
        font-size: 15px;
        color: #b0b0b0;
    }
    .clickk{
        width: 10%;
        height: 10%;
        position: absolute;
        right: 40px;
        top: 240px;
    }
</style>