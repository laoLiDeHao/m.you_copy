<template>
    <div class="mainBox">
        <FlowPics />
        <Discount />
        <NewuserAd />
        <RankingList />
        <Additional />
        <MainIndexFooter/>
    </div>
</template>

<script>
import FlowPics from './MainIndexComps/FlowPics.vue'
import Discount from './MainIndexComps/Discount.vue'
import NewuserAd from './MainIndexComps/NewuserAd.vue'
import RankingList from './MainIndexComps/RankingList.vue'
import Additional from './MainIndexComps/Additional.vue'
import MainIndexFooter from './MainIndexComps/MainIndexFooter.vue'
export default {
    name: 'MainIndex',
    components: { FlowPics, Discount, NewuserAd, RankingList, Additional,MainIndexFooter },

}
</script>

<style scoped lang="less">
.mainBox {
    width: 100vw;
    background: rgb(187, 187, 187);
}

.flowPics {
    width: 100vw;
    // border: 1px red solid;
}
</style>