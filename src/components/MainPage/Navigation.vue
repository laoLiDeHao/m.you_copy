<template>
    <div :class="[showAll == false ? 'mainBox' : 'mainBox_act']">
        <div :class="[showAll == false ? 'left' : 'left_act']">
            <div class="inner">
                <div  :class="[routerTarget == item.id ? 'tags_act' : 'tags']" v-for="item in navs" :key="item.id" @click="routerTarget=item.id" >{{ item.name }}</div>
            </div>
        </div>
        <div :class="[showAll == false ? 'right' : 'right-act']" @click="showAll=!showAll">
            <svg t="1655452661969" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="1211">
                <path
                    d="M910.222222 796.444444c-17.066667 0-34.133333-5.688889-45.511111-17.066666L551.822222 409.6c-11.377778-5.688889-17.066667-11.377778-34.133333-11.377778-5.688889 0-22.755556 5.688889-28.444445 11.377778l-329.955555 364.088889c-22.755556 22.755556-56.888889 22.755556-79.644445 5.688889-22.755556-22.755556-22.755556-56.888889-5.688888-79.644445l329.955555-364.088889c28.444444-34.133333 73.955556-51.2 119.466667-51.2s85.333333 22.755556 119.466666 56.888889l312.888889 364.088889c22.755556 22.755556 17.066667 56.888889-5.688889 79.644445-11.377778 5.688889-28.444444 11.377778-39.822222 11.377777z"
                    p-id="1212" fill="#515151"></path>
            </svg>
        </div>

    </div>
</template>

<script>
import { reactive, toRefs, } from 'vue'
export default {
    name: 'Navigation',

    setup() {
        
        let data = reactive({
            navs: [{ id: 1, name: '推荐' },
            { id: 2, name: '居家生活' },
            { id: 3, name: '宠物生活' },
            { id: 4, name: '服饰鞋包' },
            { id: 5, name: '美食酒水' },
            { id: 6, name: '各户清洁' },
            { id: 7, name: '母婴亲子' },
            { id: 8, name: '运动旅行' },
            { id: 9, name: '数码家电' },
            { id: 10, name: '严选全球' }],

            showAll: false,

            routerTarget:1
        })

        let shwoToggle = () => {
            data.showAll = !data.showAll
        }
        let showRouter = (item)=>{
            console.log(item);
        }

        return { ...toRefs(data), shwoToggle,showRouter }
    }
}
</script>

<style lang="less" scoped>
.mainBox {
    width: 100vw;
    height: 5rem;
    background: white;
    // background: rgb(17, 221, 34);
    display: flex;
    transition: 0.2s all linear;

}

.mainBox_act {
    width: 100vw;
    height: 15rem;
    background: white;
    // background: rgb(17, 221, 34);
    display: flex;
    transition: 0.2s all linear;

}

.left {
    width: 85vw;
    height: 5rem;
    // background: rgb(17, 221, 34);
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    transition: .5s all linear;

    .inner {
        height: 5rem;
        background: rgb(255, 255, 255);
        display: flex;
        // justify-content: center;
        align-items: center;


    }

}
::-webkit-scrollbar {

  display: none; /* Chrome Safari */

}
.left_act {
    width: 85vw;
    height: 15rem;
    // background: rgb(17, 221, 34);
    display: flex;
    justify-content: center;
    overflow-x: scroll;
    overflow-y: hidden;
    transition: 0.5s all linear;


    .inner {
        width: 80vw;
        height: 15rem;
        background: rgb(255, 255, 255);
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;
    }
}

.tags {
    width: 6.5rem;
    height: 3rem;
    font-size: 1.4rem;
    margin-right: 1rem;
    margin-top: 0.2rem;
    text-align: center;
    // border: 1px solid red;
}

.tags_act {
    width: 6.5rem;
    height: 3rem;
    color: red;
    font-size: 1.4rem;
    margin-right: 1rem;
    margin-top: 0.2rem;
    text-align: center;
    position: relative;
    // border: 1px solid red;
    &::after {
    content: ' ';
    display: block;
    width: 6.5rem;
    height: .3rem;
    background: red;
    position: absolute;
    bottom: 0;
}

}
.right {
    width: 15vw;
    height: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 2rem;
        height: 20px;
        margin-bottom: 1rem;
        transition: 0.2s all linear;
    }

}

.right-act {
    width: 15vw;
    height: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;


    svg {
        width: 2rem;
        height: 20px;
        margin-bottom: 1rem;
        transform: rotateZ(-180deg);
        transition: 0.2s all linear;


    }
}
</style>