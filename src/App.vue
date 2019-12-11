<template>
  <div id="app">
    <Navigation></Navigation>
    <full-page :options="options">
      <div class="section">
        <Home></Home>
      </div>
      <div class="section">
        <Profile></Profile>
      </div>
      <div class="section">
        <Achievement></Achievement>
      </div>
      <div class="section">
        <Experience></Experience>
      </div>
      <div class="section">
        <Achievement></Achievement>
      </div>
      <div class="section">
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
        anchors: ['home', 'profile', 'achievement', 'experience', 'interest', 'future'],
        afterLoad: this.afterLoad,
        scrollOverflow: true, // 內容超出後是否出現滾動條
        loopHorizontal: false, // 左右滑塊循環
        scrollBar: false,
        menu: '#menu',
        easing: 'easeInOut'
      }
    }
  }
}
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
