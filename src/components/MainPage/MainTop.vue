<template>
    <div class="mainBox">
        <div id="line">
            <div id="logo"><a href="#">网易严选</a></div>
            <input type="search" name="" id=""  @input="getValue" placeholder="搜索商品,共3000+款好物" v-model="inputText" />
            <div id="loginBtn">登录</div>
        </div>

    </div>
</template>

<script>
import {reactive,toRefs,} from 'vue'
export default {
    name:'MainTop',
    setup() {
        let data = reactive({
           inputText:''
        })
        const getValue=()=>{
       console.log(data.inputText)}

        return { ...toRefs(data),getValue}
    }
}
</script>

<style scoped lang="less">
a {
    text-decoration: none;
    color: black
}

.mainBox {
    width: 100vw;
    height: 8rem;
    background: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;

    #line {
        width: 95%;
        height: 5rem;
        // border: .1rem red solid;
        display: flex;
        justify-content: center;
        align-items: center;

        #logo {
            width: 14rem;
            height: 5rem;
            line-height: 5rem;
            text-align: center;
            font-size: 1.8rem;
            font-family: '微软雅黑';

        }

        input {
            width: 100%;
            height: 4rem;
            margin: 0;
            padding: 0;
            outline: none;
            border: none;
            line-height: 4rem;
            font-size: 2.0rem;
            text-align: center;
            background: rgb(209, 209, 209);
            border-radius: .5rem ;
            margin: .5rem 1rem .5rem 1rem;

        }

        #loginBtn{
            width: 7.5rem;
            height: 3.5rem;
            line-height: 3.5rem;
            text-align: center;
            border: .1rem red solid;
            color: rgb(219, 7, 7);
            font-size: 2rem;
            border-radius: .5rem;
            cursor: pointer;
        }
    }
}
</style>