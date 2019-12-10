<template>
  <div class="section item-1">
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
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
