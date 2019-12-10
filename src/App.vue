<template>
  <div id="app">
    <Navigation></Navigation>
    <full-page :options="options">
      <div class="section">
        <div class="box1">
          <router-view />
        </div>
      </div>
      <div class="section">
        <div class="box2">
          section2
        </div>
      </div>
      <div class="section">
        <div class="box3">
          section3
        </div>
      </div>
      <div class="section">
        <div class="box4">
          section4
        </div>
      </div>
      <div class="section">
        <div class="box5">
          section5
        </div>
      </div>
      <div class="section">
        <div class="box6">
          section6
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'App',
  components: {
    Navigation: Navigation
  },
  data () {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        sectionsColor: [
          'transparent',
          'transparent',
          '#e4e4e4',
          'rgba(255, 255, 255, .0)',
          'transparent',
          'transparent'
        ],
        scrollingSpeed: 700,
        navigation: true, // 導航條顯示
        anchors: [
          '',
          'profile',
          'achievement',
          'experience',
          'interest',
          'future'
        ],
        afterLoad: this.afterLoad,
        scrollOverflow: false, // 內容超出後是否出現滾動條
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
