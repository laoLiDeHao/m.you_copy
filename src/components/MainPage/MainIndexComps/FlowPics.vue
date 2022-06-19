<template>
    <div class="mainBoxFlow">
        <el-carousel trigger="click" id="MainIndexflowBoard">
            <el-carousel-item v-for="item in flowData" :key="item.id">
                <!-- <img  src='../../../assets/Mainindex/Flow1.png' alt=""> -->
                <img class="MainIndexflowBoardInnerImg" :src="item.url" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="MainIndexFlowPicsAd">
        <div>
            <div>
                <windmill theme="outline" size="16" fill="#ff1431" width='2.4rem' />
            </div>
            <div>网易自营品牌</div>
        </div>
        <div>
            <div>
                <protect theme="outline" size="16" fill="#ff1431" />
            </div>
            <div>30天无忧退货</div>
        </div>
        <div>
            <div>
                <currency theme="outline" size="16" fill="#ff1431" />
            </div>
            <div>48小时快速退款</div>

        </div>
    </div>
    <!-- 小标 -->
    <div class="MainIndexFlowPicsTag">
        <div class="MainIndexFlowPicsTags" v-for="item in tagsData" :key="item.id">
            <div>
                <img :src="item.url" alt="" class="MainIndexFlowPicsTagsInnerImg">
            </div>
            <div>
                <h3>{{item.title}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
// 引入iconpark添加图标
import { reactive, toRefs, } from 'vue'
import { Windmill, Protect, Currency } from '@icon-park/vue-next';
export default {
    name: 'FlowPics',
    components: { Windmill, Protect, Currency },
    setup() {
        let data = reactive({
            flowData: [
                { id: 1, url: require("../../../assets/Mainindex/Flow1.png") },
                { id: 2, url: require("../../../assets/Mainindex/Flow2.png") },
                { id: 3, url: require("../../../assets/Mainindex/Flow3.png") },
            ],
            tagsData: [
                { id: 1, url: require("../../../assets/Mainindex/tag1.png"), title: '新品首发' },
                { id: 1, url: require("../../../assets/Mainindex/tag2.png"), title: '居家生活' },
                { id: 1, url: require("../../../assets/Mainindex/tag3.png"), title: '服饰鞋包' },
                { id: 1, url: require("../../../assets/Mainindex/tag4.png"), title: '美食酒水' },
                { id: 1, url: require("../../../assets/Mainindex/tag5.png"), title: '个人护理' },
                { id: 1, url: require("../../../assets/Mainindex/tag6.png"), title: '母婴亲子' },
                { id: 1, url: require("../../../assets/Mainindex/tag7.png"), title: '运动旅行' },
                { id: 1, url: require("../../../assets/Mainindex/tag8.png"), title: '数码家电' },
                { id: 1, url: require("../../../assets/Mainindex/tag9.png"), title: '宠物生活' },
                { id: 1, url: require("../../../assets/Mainindex/tag10.gif"), title: '每日秒杀' },

            ]
        })


        return { ...toRefs(data) }
    }

}
</script>

<style scoped lang="less">
.mainBoxFlow {
    width: 100vw;
    height: 16rem;
    background: white;
}

#MainIndexflowBoard {
    width: 100vw;
    height: 16rem;
}

/deep/.el-carousel__container {
    width: 100vw;
    height: 16rem;
}

/deep/.el-carousel__item {
    width: 100vw;
    height: 16rem;
    text-align: center;
}

/deep/.el-carousel__button {
    width: 20px;
}

.MainIndexflowBoardInnerImg {
    width: 85vw;
    height: 16rem;
}

.MainIndexFlowPicsAd {
    width: 100vw;
    height: 30px;
    background: white;
    padding-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    &>div {
        width: 12rem;
        height: 3rem;
        // border: .1rem greenyellow solid;
        display: flex;

        &>div:nth-child(1) {
            width: 3rem;
            height: 3rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &>div:nth-child(2) {
            width: 100%;
            height: 3rem;
            line-height: 3rem;
        }
    }
}



.MainIndexFlowPicsTag {
    width: 100vw;
    padding: 1rem 0 1rem 0;
    background: white;
    // border: 1px red solid;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    &>div {
        width: 19vw;
        padding: 1px 0 1px 0;
        // background: greenyellow;
    }
}
.MainIndexFlowPicsTags{
    cursor: pointer;
}
.MainIndexFlowPicsTagsInnerImg {
    width: 19vw;
}
</style>