<template>
  <div id="app">
    <Navigation></Navigation>
    <full-page :options="options">
      <div class="section item-1">
        <Home></Home>
      </div>
      <div class="section item-2">
        <Profile></Profile>
      </div>
      <div class="section item-3">
        <Achievement></Achievement>
      </div>
      <div class="section item-4">
        <Experience></Experience>
      </div>
      <div class="section item-5">
        <Interest></Interest>
      </div>
      <div class="section item-6">
        <Future></Future>
      </div>
    </full-page>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import Interest from './components/Interest'
import Home from './components/Home'
import Future from './components/Future'
import Experience from './components/Experience'
import Achievement from './components/Achievement'
export default {
  name: 'app',
  components: {
    Navigation,
    Profile,
    Interest,
    Home,
    Future,
    Experience,
    Achievement
  },
  data () {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        sectionsColor: [
          'transparent',
          'transparent',
          '#e4e4e4',
          '#41b883',
          'transparent',
          'transparent'
        ],
        scrollingSpeed: 700,
        navigation: true, // 導航條顯示
        anchors: [
          'home',
          'profile',
          'achievement',
          'experience',
          'interest',
          'future'
        ],
        afterLoad: this.afterLoad,
        scrollOverflow: true, // 內容超出後是否出現滾動條
        loopHorizontal: false, // 左右滑塊循環
        scrollBar: false,
        menu: '#menu',
        easing: 'easeInOut'
      },
      methods: {
        // 頁面渲染後回調
        afterRender () {

        },
        // 滾動觸發後結束前回調
        onLeave (index, nextIndex, direction) {

        },
        // 滾動結束後回調
        afterLoad (anchorLink, index) {

        },
        // 水平滑塊回調
        onSlideLeave (anchorLink, index, slideIndex, direction) {

        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
/********基本***************/

body {
  font-family: microsoft yahei, sans-serif;
  tap-heilight-color: transparent;
  -webkit-tap-highlight-color: transparent;
}

a {
  color: #ffffff;
}

.f-left {
  float: left;
}

.f-right {
  float: right;
}

.section.item-1,
.section.item-2,
.section.item-4,
.section.item-6 {
  text-align: center;
  font: 50px "Microsoft Yahei";
  color: #fff;
}

/********基本END***************/

/*********************设置背景************************************/

.item-1 {
  background: url("~@/assets/images/board-wallpapers.jpg") no-repeat center
    center;
  -webkit-background-size: cover;
  background-size: cover;
}

.item-2 {
  background: url("~@/assets/images/Chalk-board-wallpaper-hd.jpg") no-repeat
    center center;
  -webkit-background-size: cover;
  background-size: cover;
}

.item-4 {
  background: url("~@/assets/images/bg2.jpg") no-repeat center center;
  -webkit-background-size: cover;
  background-size: cover;
}

.item-5 {
  background: url("~@/assets/images/bg1.jpg") no-repeat center center;
  -webkit-background-size: cover;
  background-size: cover;
}

/**********************设置背景End*****************************************/

/********************右側導航欄*************************************/

#fp-nav {
  top: 80%;
}

#fp-nav ul li {
  vertical-align: middle;
  margin: 10px 50px 0;
}

#fp-nav li .active {
  background-position: 0 bottom;
}

#fp-nav ul li a {
  display: block;
  color: #8f9da4;
  width: 21px;
  height: 21px;
  background: url(~@/assets/images/dot.png) 5px 5px no-repeat;
  /*right: 0;*/
}

#fp-nav span {
  display: none;
}

/****************************右側導航欄End******************************/
</style>
