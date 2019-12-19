<template>
  <div>
    <b-container fluid>
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="d-none d-md-block title">基本資料</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6" sm="6" md="3" class="icon-infomation introduction">
          <a href="https://blog.yosheng.tw">
            <img src="~@/assets/images/page-2/laptop.png" alt="" />
          </a>
          <h4>個人簡介</h4>
          <p>
            1993年 牡羊男
          </p>
        </b-col>
        <b-col cols="6" sm="6" md="3" class="icon-infomation education">
          <a href="https://who.shu.edu.tw/yosheng0323">
            <img src="~@/assets/images/page-2/cap.png" alt="" />
          </a>
          <h4>教育背景</h4>
          <p>
            世新大學 資管系 網科組
            <br />
            同濟大學 計算機科學 交換生
          </p>
        </b-col>
        <b-col cols="6" sm="6" md="3" class="icon-infomation experience">
          <a href="https://blog.yosheng.tw/about-author">
            <img src="~@/assets/images/page-2/scroll.png" alt="" />
          </a>
          <h4>校園經歷</h4>
          <p>
            占星社 副社長
            <br />
            學生議會 資管系議員
          </p>
        </b-col>
        <b-col cols="6" sm="6" md="3" class="icon-infomation contact">
          <a href="mailto:sad445566@gmail.com">
            <img src="~@/assets/images/page-2/mail.png" alt="" />
          </a>
          <h4>聯繫方式</h4>
          <p>
            yosheng0323@outlook.com
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
// 影响到Home
// .row {
//   margin-top: 30px;
// }

// .container {
//   display: none;
// }

.icon-infomation {
  height: 211px;
  position: relative;
}

.icon-infomation img {
  height: 160px;
}

.icon-infomation p {
  font-size: 12px;
  text-align: center;
}

.introduction {
  -webkit-animation: bounceIn 2s;
  animation: bounceIn 2s;
}

.education {
  //opacity: 0;
  -webkit-animation: lightSpeedIn 2s ease forwards;
  animation: lightSpeedIn 2s ease forwards;
  -webkit-animation-delay: 1s;
}

.experience {
  //opacity: 0;
  -webkit-animation: rubberBand 2s ease forwards;
  animation: rubberBand 2s ease forwards;
  -webkit-animation-delay: 1.5s;
}

.contact {
  //opacity: 0;
  -webkit-animation: bounceInUp 2s ease forwards;
  animation: bounceInUp 2s ease forwards;
  -webkit-animation-delay: 2s;
}

.title {
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
