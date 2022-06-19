<template>
    <div class="mainBoxDiscountInMainIndex">
        <div class="mainBoxDiscountInMainIndextopAD">
            <img src="../../../assets/Mainindex/3/top.png" alt="">
        </div>
        <div class="mainBoxDiscountInMainIndexBottomAD">
            <div>
                <img src="../../../assets/Mainindex/3/left.webp" alt="">
            </div>
            <div>
                <img src="../../../assets/Mainindex/3/mid.webp" alt="">
            </div>
            <div>
                <img src="../../../assets/Mainindex/3/right.webp" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Discount'
}
</script>

<style scoped lang="less">
.mainBoxDiscountInMainIndex {
    width: 100vw;
    // border: 1px red solid;
}

.mainBoxDiscountInMainIndextopAD {
    width: 100vw;
    padding: 2px 0 2px 0;
    // border: 1px red solid;
    text-align: center;

    img {
        width: 100%;
        cursor: pointer;
    }
}

.mainBoxDiscountInMainIndexBottomAD {
    width: 100vw;
    padding: 10px 0 10px 0;
    // border: 1px red solid;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div {
        width: 30vw;
        height: 30vw;
        text-align: center;
        line-height: 30vw;

        img {
            width: 30vw;
            height: 30vw;
            cursor: pointer;
        }
    }
}
</style>