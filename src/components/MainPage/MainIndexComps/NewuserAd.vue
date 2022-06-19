<template>
    <div class="mainBoxInMainIndexNewuserAd">
        <h3>- 新人专享礼 -</h3>
        <div class="mainBoxInMainIndexNewuserAdInner">
            <div class="mainBoxInMainIndexNewuserAdInner-left">
                <h3>新人专享礼包</h3>
                <div class="mainBoxInMainIndexNewuserAdInner-left-img">
                    <img src="../../../assets/Mainindex/NewuserAd/DM_20220618132647_001.png" alt="">
                </div>
            </div>
            <div class="mainBoxInMainIndexNewuserAdInner-right">
                <div class="mainBoxInMainIndexNewuserAdInner-right-top">
                    <h3>福利社</h3>
                    <img src="../../../assets/Mainindex/NewuserAd/DM_20220618132647_002.webp" alt="">
                </div>
                <div class="mainBoxInMainIndexNewuserAdInner-right-bottom">
                    <h3>新人拼团</h3>
                    <img src="../../../assets/Mainindex/NewuserAd/DM_20220618132647_003.webp" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewuserAd'
}
</script>

<style scoped lang="less">
.mainBoxInMainIndexNewuserAd {
    width: 100vw;
    padding: 1rem 0 1rem 0;
    background: white;
    margin-bottom: 1rem;

    h3 {
        text-align: center;
    }
    
       
}

.mainBoxInMainIndexNewuserAdInner {
    width: 85vw;
    height: 16rem;
    // border: 1px solid red;
    margin: auto;
    display: flex;
    justify-content: space-between;

}
.mainBoxInMainIndexNewuserAdInner-left{
    padding:1rem 2vw 1rem 2vw;
    width: 40vw;
    height: 14rem;
    background: goldenrod;
    
}
.mainBoxInMainIndexNewuserAdInner-left-img{
    text-align: center;
    margin-top: 1rem;
    &>img{
        width: 78%;
    }
}
.mainBoxInMainIndexNewuserAdInner-right{
    width: 40vw;
    height: 16rem;

}
.mainBoxInMainIndexNewuserAdInner-right-top{
    padding:1rem 2vw 1rem 2vw;
    width: 36vw;
    height: 6rem;
    margin-bottom: .1rem;
    background: pink;
    display: flex;
    justify-content: space-between;
}
.mainBoxInMainIndexNewuserAdInner-right-bottom{
    padding:1rem 2vw 1rem 2vw;
    width: 36vw;
    height: 6rem;
    background: rgb(227, 227, 5);
    display: flex;
    justify-content: space-between;
}
</style>