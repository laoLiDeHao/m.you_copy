<template>
  <div class="MainIndexFooter">
        <div>
            <div>下载app</div>
            <div>电脑版</div>
        </div>
        <div id="MainIndexFooterText1" >网易公司版权所有 &copy; 1997-2022</div>
        <div id="MainIndexFooterText2" >食品经营许可证: JY13301080111719</div>
  </div>
</template>

<script>
export default {
    name:'MainIndexFooter'
}
</script>

<style scoped lang="less">
    .MainIndexFooter{
        padding: 3rem 5vw  10rem 5vw;
        width: 90vw;
        background: black;
         color: gray;

        &>div:nth-child(1){
            width: 60vw;
            height: 5rem;
            margin: auto;
            // border: 1px solid red;
            display: flex;
            justify-content: space-between;
            &>div{
                width: 20vw;
                height: 3rem;
                line-height: 3rem;
                text-align: center;
                font-size: 1.4rem;
                border: 1px solid white;
                border-radius: 5px;
                color: rgb(184, 184, 184);
            }
        }
    }

    #MainIndexFooterText1,#MainIndexFooterText2{
        text-align: center;
        font-size: 1.4rem;
    }
</style>