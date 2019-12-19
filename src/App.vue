<template>
  <div id="app">
    <Navigation></Navigation>
    <full-page ref="fullpage" :options="options">
      <div class="section item-1">
        <Home v-show="activePage == 'home'"></Home>
      </div>
      <div class="section item-2">
        <Profile v-show="activePage == 'profile'"></Profile>
      </div>
      <div class="section item-3">
        <Achievement v-show="activePage == 'achievement'"></Achievement>
      </div>
      <div class="section item-4">
        <Experience v-show="activePage == 'experience'"></Experience>
      </div>
      <div class="section item-5">
        <Interest v-show="activePage == 'interest'"></Interest>
      </div>
      <div class="section item-6">
        <Future v-show="activePage == 'future'"></Future>
      </div>
    </full-page>
    <div
      id="fp-nav"
      class="d-none d-sm-block"
      v-bind:style="{ marginTop: navStyleTopValue + 'px', right: '17px' }"
    >
      <ul>
        <li
          v-for="(item, index) in fullpageNavList"
          :key="index"
          v-b-tooltip.hover.left="item.title"
        >
          <a
            v-bind:href="'#' + item.page"
            v-bind:class="{ active: item.page === activePage }"
            @click="activePage = item.href"
          ></a>
        </li>
      </ul>
    </div>
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
        navigation: false, // 導航條顯示
        anchors: [
          'home',
          'profile',
          'achievement',
          'experience',
          'interest',
          'future'
        ],
        afterLoad: this.afterLoad,
        afterRender: this.afterRender,
        onLeave: this.onLeave,
        onSlideLeave: this.onSlideLeave,
        scrollOverflow: true, // 內容超出後是否出現滾動條
        loopHorizontal: false, // 左右滑塊循環
        scrollBar: false,
        menu: '#menu',
        easing: 'easeInOut'
      },
      activePage: 'home',
      fullpageNavList: [
        { page: 'home', title: '個人簡歷' },
        { page: 'profile', title: '基本資料' },
        { page: 'achievement', title: '個人成就' },
        { page: 'experience', title: '工作經歷' },
        { page: 'interest', title: '實務經驗' },
        { page: 'future', title: '展望未來' }
      ]
    }
  },
  methods: {
    // 頁面渲染後回調
    afterRender () {
      // $('item-4').css('background', 'rgba(255, 255, 255, .1)')
      // // 頂部導航欄自動會拉事件
      // if ($('.navbar-toggle').css('display') == 'block') {
      //   $('.navbar-collapse li').on('click', function () {
      //     $('.navbar-toggle').trigger('click')
      //   })
      // }
      // $('#fp-nav').addClass('hidden-xs')
      // // 為了避免標籤太多同一時間加載的話在剛載入頁面時候產生怪異感，所有動畫元素初始都是hidden的
      // $('.item-1 .next-page').on('click', function () {
      //   $.fn.fullpage.moveSectionDown()
      // })
      // setTimeout(function () {
      //   $('.item-1 .corner').show()
      //   $('.resume-hide').show()
      // }, 500)
    },
    // 滾動觸發後結束前回調
    onLeave (origin, destination, direction) {
      this.activePage = destination.anchor
    },
    // 滾動結束後回調
    afterLoad (origin, destination, direction) {},
    // 水平滑塊回調
    onSlideLeave (anchorLink, index, slideIndex, direction) {}
  },
  mounted () {
    console.log(this.$refs.fullpage)
  },
  computed: {
    navStyleTopValue () {
      return -68
    }
  }
}
</script>

<style scoped lang="scss">
/********基本***************/
.item {
  text-align: center;
  font: 50px "Microsoft Yahei";
  color: #fff;
}

.item-1 {
  @extend .item;
}

.item-2 {
  @extend .item;
}
.item-4 {
  @extend .item;
  .fp-tableCell {
    vertical-align: top;
    padding-top: 100px;
  }
}
.item-6 {
  @extend .item;
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

.item-6 {
  background: url("~@/assets/images/pure.jpg") no-repeat center center;
  -webkit-background-size: cover;
  background-size: cover;
  // width: 100%;
  // height: 100%;
  // position: fixed;
  // display: none;
}

/**********************设置背景End*****************************************/
</style>
