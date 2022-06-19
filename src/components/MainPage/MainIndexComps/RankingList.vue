<template>
    <h2 id="mainboxInMainIndexRankingList-title">类目热销榜</h2>
    <div class="mainboxInMainIndexRankingList">
        <div v-for="item in rankList "  :key="item.id">
            <h3>{{item.title}}</h3>
            <div>
                <img :src="item.url" alt="">
            </div>
        </div>
      
    </div>
</template>

<script>
import { reactive, toRefs, } from 'vue'
export default {
    name: 'RankingList',
    setup() {
        let data = reactive({
            rankList: [
                {id:1,title:'数码家电榜',url:require("../../../assets/Mainindex/rankingList/1.png")},
                {id:2,title:'居家生活榜',url:require("../../../assets/Mainindex/rankingList/2.png")},
                {id:3,title:'服饰鞋包榜',url:require("../../../assets/Mainindex/rankingList/3.png")},
                {id:4,title:'美食酒水榜',url:require("../../../assets/Mainindex/rankingList/4.png")},
                {id:5,title:'各户清洁榜',url:require("../../../assets/Mainindex/rankingList/5.png")},
                {id:6,title:'宠物生活榜',url:require("../../../assets/Mainindex/rankingList/6.png")},
                {id:7,title:'母婴亲子榜',url:require("../../../assets/Mainindex/rankingList/7.png")},
                {id:8,title:'运动旅行榜',url:require("../../../assets/Mainindex/rankingList/8.png")},
                {id:9,title:'严选全球榜',url:require("../../../assets/Mainindex/rankingList/9.png")},
            ]
        })

        return { ...toRefs(data) }
    }
}

</script>

<style scoped lang="less">
#mainboxInMainIndexRankingList-title {
    line-height: 8vw;
    padding-left: 5vw;
    background:white
}

.mainboxInMainIndexRankingList {
    padding: 0.2rem 5vw 2rem 5vw;
    width: 90vw;
    // border: 1px red solid;
    display: flex;
    flex-wrap: wrap;
    background: white;
    margin-bottom: 0.2rem;
    &>div {
        width: 20vw;
        height: 22vw;
        // border: 1px red solid;
        margin: 0.6vw;
        text-align: center;
        &>div>img {
            width: 16vw;
        }
    }

    &>div:nth-child(1) {
        width: 41.7vw;
        background: rgb(249, 243, 228);
        display: flex;
        align-items: center;
        justify-content: center;

        &>h3 {
            position: relative;
        }

        &>h3::after {
            content: '';
            display: block;
            width: 6vw;
            height: .2rem;
            background: black;
        }

        &>div>img {
            width: 20vw;
        }
    }

    &>div:nth-child(2) {
        width: 41.7vw;
        background: rgb(235, 239, 246);
        display: flex;
        align-items: center;
        justify-content: center;

        &>h3 {
            position: relative;
        }

        &>h3::after {
            content: '';
            display: block;
            width: 6vw;
            height: .2rem;
            background: black;
        }

        &>div>img {
            width: 20vw;
        }
    }
}
</style>