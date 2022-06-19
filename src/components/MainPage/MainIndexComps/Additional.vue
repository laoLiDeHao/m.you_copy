<template>
    <div class="mainboxInMainIndexAdditional">
        <div class="mainboxInMainIndexAdditionalInner">
            <div>
                <div>{{ additions[0].title }}</div>
                <div>{{ additions[0].words }}</div>
                <div>
                    <img :src="additions[0].img1" alt="">
                    <img :src="additions[0].img2" alt="">
                </div>
            </div>
            <div>
                <div>{{ additions[1].title }}</div>
                <div>{{ additions[1].words }}</div>
                <div>
                    <img :src="additions[1].img1" alt="">
                    <img :src="additions[1].img2" alt="">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs, } from 'vue'
export default {
    name: "Additional",
    setup() {
        let data = reactive({
            additions: [
                {
                    id: 1, title: '明星爆款', words: '口碑放心买', color: 'skyblue',
                    img1: require("../../../assets/Mainindex/additional/1.webp"),
                    img2: require("../../../assets/Mainindex/additional/2.webp"),
                },
                {
                    id: 2, title: '严选众筹', words: '探索美与用', color: 'orange',
                    img1: require("../../../assets/Mainindex/additional/3.webp"),
                    img2: require("../../../assets/Mainindex/additional/4.webp"),
                },
            ]
        })

        return { ...toRefs(data) }
    }
}
</script>

<style scoped lang="less">
.mainboxInMainIndexAdditional {
    width: 90vw;
    padding: 1rem 5vw 1rem 5vw;
    // border: 1px red solid;
    background: white;
    margin-bottom: 1rem;
}

.mainboxInMainIndexAdditionalInner {
    width: 90vw;
    // border: 1px red solid;
    display: flex;
    justify-content: space-between;

    &>div {
        width: 40.8vw;
        height: 14rem;
        background: rgb(245, 245, 245);
        padding: 2rem 2vw 2rem 2vw;

        &>div:nth-child(1) {
            width: 40.8vw;
            height: 3rem;
            // border: 1px solid red;
            margin-bottom: 1rem;
            font-size: 1.8rem;
        }

        &>div:nth-child(2) {
            width: 40.8vw;
            height: 3rem;
            line-height: 3rem;
            // border: 1px solid red;
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }

        &>div:nth-child(3) {
            width: 40.8vw;
            height: 7rem;
            // border: 1px solid red;
            text-align: center;
            &>img{
                width: 7rem;
                height: 7rem;
            }
        }
    }
}
</style>