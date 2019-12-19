<template>
  <div>
    <b-row class="word">
      <b-row class="userPic">
        <div
          class="sec1_userPic"
          style="transition-timing-function: cubic-bezier(0.6, 0.37, 0.23, 0.94); top: 0px; border-radius: 100px;"
        ></div>
      </b-row>
      <b-col cols="12" class="d-none d-sm-block resume-name-big">張又升</b-col>
      <b-col cols="12" class="d-sm-none resume-name">張又升</b-col>
      <b-col
        cols="12"
        class="motto resume-hide hinge-sty"
        style="position: relative"
      >
        Yosheng
      </b-col>
      <b-col cols="12" class="social-links">
        <a href="https://www.facebook.com/yosheng0323"
          ><font-awesome-icon :icon="['fab', 'facebook']" fixed-width
        /></a>
        <a href="https://www.linkedin.com/in/yosheng-zhang-020962102"
          ><font-awesome-icon :icon="['fab', 'linkedin']" fixed-width
        /></a>
        <a href="https://github.com/yosheng"
          ><font-awesome-icon :icon="['fab', 'github']" fixed-width
        /></a>
        <a href="https://legacy.gitbook.com/@yosheng"
          ><font-awesome-icon :icon="['fas', 'book']" fixed-width
        /></a>
        <a href="https://www.slideshare.net/ssuserf01a96"
          ><font-awesome-icon :icon="['fab', 'slideshare']" fixed-width
        /></a>
      </b-col>
        <a href="#" class="next-page">
          <font-awesome-icon :icon="['fas', 'chevron-down']" fixed-width />
        </a>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.resume-name {
  color: #b6bf31;
  text-shadow: 9px -2px 15px #000;
}

.resume-name-big {
  @extend .resume-name;
  text-align: center;
  font-size: 50px;
  text-shadow: 5px -2px 8px #151414;
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
  font-size: 30px;
  line-height: 80px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  transition: 1s all ease;
  -webkit-transition: 1s all ease;
  animation: fadeInUp 2s ease;
  -webkit-animation: fadeInUp 2s ease;
}
.next-page:hover {
  background: rgba(51, 51, 51, 1);
}

.fa-chevron-down {
  animation: nextPage 2s linear infinite;
  -webkit-animation: nextPage 2s linear infinite;
}

.word > .resume-name-big,
.word > .resume-name {
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
  font-size: 3rem;
}

/********************首頁***************************************/
.userPic {
  margin: 0px auto;
  width: 170px;
  height: 170px;
}

.sec1_userPic {
  position: relative;
  width: 170px;
  height: 170px;
  background-image: url(~@/assets/images/page-1/userPic.jpg);
  background-size: 100% 100%;
  border: 5px solid #fff;
}

/********************首頁***************************************/
</style>
