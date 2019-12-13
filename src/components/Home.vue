<template>
  <div class="row word">
    <div class="userPic">
      <div
        class="sec1_userPic"
        style="transition-timing-function: cubic-bezier(0.6, 0.37, 0.23, 0.94); top: 0px; border-radius: 100px;"
      ></div>
    </div>
    <span class="hidden-xs resume-hide">張又升</span>
    <span class="col-xs-12 hidden-sm hidden-md hidden-lg resume-hide"
      >張又升</span
    >
    <p class="motto resume-hide hinge-sty" style="position: relative">
      Yosheng
    </p>
    <div class="social-links">
      <a href="https://www.facebook.com/yosheng0323"
        ><i class="lni-facebook size-md"></i
      ></a>
      <a href="https://www.linkedin.com/in/yosheng-zhang-020962102"
        ><i class="lni-linkedin size-md"></i
      ></a>
      <a href="https://github.com/yosheng"
        ><i class="lni-github size-md"></i
      ></a>
      <a href="https://legacy.gitbook.com/@yosheng"
        ><i class="lni-book size-md"></i
      ></a>
      <a href="https://www.slideshare.net/ssuserf01a96"
        ><i class="lni-slideshare size-md"></i
      ></a>
    </div>
    <a href="#" class="next-page ">
      <span class="glyphicon glyphicon-chevron-down"></span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// page-1
.word {
  margin-top: -10%;
}
.word > span:first-child {
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  color: #0a9676;
  text-shadow: 5px -2px 8px #151414;
}
.word > span.hidden-xs,
.word > span.col-xs-12 {
  color: #b6bf31;
  text-shadow: 9px -2px 15px #000;
}

.motto {
  font-size: 25px;
}
.next-page {
  position: absolute;
  margin-left: -35px;
  left: 50%;
  bottom: 10%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.next-page,
.next-page:hover,
.next-page:focus {
  color: yellowgreen;
}

.next-page {
  line-height: 80px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  transition: 1s all ease;
  -webkit-transition: 1s all ease;
}
.next-page:hover {
  background: rgba(51, 51, 51, 1);
}

.next-page span {
  font-size: 30px;
  animation: nextPage 2s linear infinite;
  -webkit-animation: nextPage 2s linear infinite;
}
.next-page {
  animation: fadeInUp 2s ease;
  -webkit-animation: fadeInUp 2s ease;
}
.inner {
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
}

.corner1,
.corner2,
.corner3,
.corner4 {
  max-width: 72px;
  min-width: 50px;
  width: 5%;
  position: absolute;
}
[class^="corner"] img {
  width: 100%;
}

.corner1 {
  left: 10%;
  top: 10%;
  animation: corner1 1s ease;
  -webkit-animation: corner1 1s ease;
  transform-origin: 0;
  -webkit-transform-origin: 0;
}

.corner2 {
  left: 10%;
  bottom: 10%;
  animation: corner2 1s ease;
  -webkit-animation: corner2 1s ease;
  transform-origin: 0;
  -webkit-transform-origin: 0;
}
.corner3 {
  right: 10%;
  top: 10%;
  animation: corner3 1s ease;
  -webkit-animation: corner3 1s ease;
}

.corner4 {
  right: 10%;
  bottom: 10%;
  animation: corner4 1s ease;
  -webkit-animation: corner4 1s ease;
}

.word > span:nth-child(1),
.word > span:nth-child(2) {
  display: inline-block;
  -webkit-animation: fadeInDownBig 2s ease;
  animation: fadeInDownBig 2s ease;
}

.word p {
  -webkit-animation: p-fly 2s ease;
  animation: p-fly 2s ease;
}

.social-links {
  margin-bottom: 25px;
}

/********************首頁***************************************/
.userPic {
  margin: 0px auto;
  width: 170px;
  height: 170px;
}

.row .sec1_userPic {
  position: relative;
  width: 170px;
  height: 170px;
  background-image: url(~@/assets/images/page-1/userPic.jpg);
  background-size: 100% 100%;
  border: 5px solid #fff;
}

/********************首頁***************************************/
</style>
