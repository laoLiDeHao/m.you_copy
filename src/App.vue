<template>
  <div id="top">
    <MainTop />
    <Navigation />
  </div>
  <MainIndex/>
  
  
  <div id="bottom">
    <Bottom/>
  </div>

</template>

<script>
import MainTop from './components/MainPage/MainTop.vue'
import Navigation from './components/MainPage/Navigation.vue'
import Bottom from './components/MainPage/Bottom.vue'
import MainIndex from './components/MainPage/MainIndex.vue'
export default {
  name: "App",
  components: { MainTop, Navigation, Bottom ,MainIndex}
}

</script>


<style lang="less" scoped>
#top {
  position: sticky;
  top: 0;
  z-index: 10;
}

#bottom {
  position: fixed;
  bottom: 0;
}
</style>
