<template>
  <div class="container">
    <h2 class="hidden-xs hidden-sm page2-title">基本資料</h2>
    <div class="row">
      <div class=" icon-infomation col-xs-6 col-sm-6 col-md-3">
        <a href="https://blog.yosheng.tw">
          <img src="images/page-2/laptop.png" alt="" />
        </a>
        <h4>個人簡介</h4>
        <p>
          1993年 牡羊男
        </p>
      </div>
      <div class=" icon-infomation col-xs-6 col-sm-6 col-md-3">
        <a href="https://who.shu.edu.tw/yosheng0323">
          <img src="images/page-2/cap.png" alt="" />
        </a>
        <h4>教育背景</h4>
        <p>
          世新大學 資管系 網科組
          <br />
          同濟大學 計算機科學 交換生
        </p>
      </div>
      <div class=" icon-infomation col-xs-6 col-sm-6 col-md-3">
        <a href="https://blog.yosheng.tw/about-author">
          <img src="images/page-2/scroll.png" alt="" />
        </a>
        <h4>校園經歷</h4>
        <p>
          占星社 副社長
          <br />
          學生議會 資管系議員
        </p>
      </div>
      <div class=" icon-infomation col-xs-6 col-sm-6 col-md-3">
        <a href="mailto:sad445566@gmail.com">
          <img src="images/page-2/mail.png" alt="" />
        </a>
        <h4>聯繫方式</h4>
        <p>
          yosheng0323@outlook.com
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.row {
  margin-top: 30px;
}

.container {
  display: none;
}

.container .icon-infomation {
  height: 211px;
  position: relative;
}

.container .icon-infomation img {
  height: 160px;
}

.icon-infomation p {
  font-size: 12px;
  text-align: center;
}

.icon-infomation:nth-child(1) {
  -webkit-animation: bounceIn 2s;
  animation: bounceIn 2s;
}

.icon-infomation:nth-child(2) {
  opacity: 0;
  -webkit-animation: lightSpeedIn 2s ease forwards;
  animation: lightSpeedIn 2s ease forwards;
  -webkit-animation-delay: 1s;
}

.icon-infomation:nth-child(3) {
  opacity: 0;
  -webkit-animation: rubberBand 2s ease forwards;
  animation: rubberBand 2s ease forwards;
  -webkit-animation-delay: 1.5s;
}

.icon-infomation:nth-child(4) {
  opacity: 0;
  -webkit-animation: bounceInUp 2s ease forwards;
  animation: bounceInUp 2s ease forwards;
  -webkit-animation-delay: 2s;
}

.page2-title {
  display: inline-block;
  -webkit-animation: zoomInDown 2s ease forwards;
  animation: zoomInDown 2s ease forwards;
}

.icon-infomation.zoomOutUp {
  opacity: 1;
  -webkit-animation: slideOutUp 0.5s linear;
  animation: slideOutUp 0.5s linear;
}
</style>
