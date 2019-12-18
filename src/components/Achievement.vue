<template>
  <div>
    <b-container fluid>
      <div
        id="demo1"
        class="slideBox sm-img fly hidden-xs hidden-sm"
        style="width: 400px; height: 300px;"
      >
        <ul class="items" style="width: 3200px; left: -2560px;">
          <li class="" style="width: 400px; height: 300px;">
            <a href="images/page-3/RHCSA.jpg" title="RHCSA"
              ><img src="images/page-3/RHCSA.jpg"
            /></a>
          </li>
          <li style="width: 400px; height: 300px;" class="">
            <a href="images/page-3/RHCE.jpg" title="RHCE"
              ><img src="images/page-3/RHCE.jpg"
            /></a>
          </li>
          <li style="width: 400px; height: 300px;" class="">
            <a href="images/page-3/OCJP6.jpg" title="OCJP 6"
              ><img src="images/page-3/OCJP6.jpg"
            /></a>
          </li>
          <li style="width: 400px; height: 300px;" class="active">
            <a href="images/page-3/Certificate_1.jpg" title="HTML5"
              ><img src="images/page-3/Certificate_1.jpg"
            /></a>
          </li>
          <li style="width: 400px; height: 300px;" class="">
            <a href="images/page-3/Certificate_2.jpg" title="HTML5"
              ><img src="images/page-3/Certificate_2.jpg"
            /></a>
          </li>
        </ul>
        <div class="tips" style="opacity: 0.6;">
          <div class="title">
            <a href="#">HTML5</a>
          </div>
          <div class="nums" style="top: 50px;">
            <a href="#" style="border-radius: 5px;" class="">RHCSA</a>
            <a href="#" style="border-radius: 5px;" class="">RHCE</a>
            <a href="#" style="border-radius: 5px;" class="">OCJP 6</a>
            <a href="#" style="border-radius: 5px;" class="">HTML5/a></a>
            <a href="#" style="border-radius: 5px;" class="active">HTML5</a>
          </div>
        </div>
      </div>
      <div class="skill-introduce">
        <div class="media">
          <div class="media-left media-top">
            <a href="#" class="">
              <img class="media-object" src="images/page-3/coding.png" alt="" />
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">程式設計</h4>
            <p>
              廣泛學習各種程式語言，從基礎 C 語言到物件導向的 C# 或 Java
              <br />具有使用 PHP 或者是 ASP.NET 搭配資料庫開發基本系統能力
              <br />喜好學習各種工具來快速完成目的，具有學習熱誠
              <br />對於前端的 HTML5、CSS3、JavaScript 皆有著墨
            </p>
          </div>
        </div>
        <div class="media ">
          <div class="media-left media-top">
            <a href="#" class="">
              <img class="media-object" src="images/page-3/repair.png" alt="" />
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">系統維護</h4>
            <p>
              學習透過Gurb4dos整合維修工具組 <br />隨著UEFI興起學習使用 rEFInd
              整合工具 <br />架設Nas開源相關系統如
              Nas4Free、FreeNas、Openmediavault <br />考取 Linux
              系統維護相關證照並學習使用 Docker
            </p>
          </div>
        </div>
        <div class="media ">
          <div class="media-left media-top">
            <a href="#" class="">
              <img class="media-object" src="images/page-3/profle.png" alt="" />
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">其他</h4>
            <p>
              善於溝通解決衝突，學習塔羅占卜協助周遭朋友解惑 <br />透過 markdown
              語法紀錄占卜筆記並使用 gitbook 發布
            </p>
          </div>
        </div>
      </div>
      <div class="skills hidden-xs">
        <span class="subject-9">Linux</span>
        <span class="subject-2">Bootstrap</span>
        <span class="subject-3">塔羅占卜</span>
        <span class="subject-4">jQuery</span>
        <span class="subject-10">C#</span>
        <span class="subject-5">程式設計</span>
        <span class="subject-6">CSS3</span>
        <span class="subject-7">系統維護</span>
        <span class="subject-8">Java</span>
        <span class="subject-1">HTML5</span>
      </div>
    </b-container >
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.container {
  // height: 100%;
  // display: none;
  // position: relative;
}

.sm-img {
  opacity: 0;
  position: absolute;
  right: 1%;
  bottom: 20%;
  -webkit-animation: sm-img 1s ease forwards;
  animation: sm-img 1s ease forwards;
  -webkit-animation-delay: 0.5s;
}
.sm-img img {
  width: 100%;
  display: block;
}

.skills span {
  position: absolute;
  left: 50%;
  top: 80%;
  color: #000000;
  transform: scale(0.5);
}
.subject-1 {
  font-size: 48px;
  margin-left: -400px;
  margin-top: -50px;
}
.subject-2 {
  font-size: 18px;
  margin-left: -250px;
  margin-top: 40px;
}
.subject-3 {
  font-size: 14px;
  margin-left: -270px;
  margin-top: 10px;
}
.subject-4 {
  font-size: 20px;
  margin-left: -200px;
  margin-top: -30px;
}
.subject-5 {
  font-size: 20px;
  margin-left: -120px;
  margin-top: 50px;
}
.subject-6 {
  font-size: 30px;
  margin-left: 81px;
  margin-top: -35px;
}
.subject-7 {
  font-size: 16px;
  margin-left: 0px;
  margin-top: -40px;
}
.subject-8 {
  font-size: 20px;
  margin-left: 10px;
  margin-top: 10px;
}
.subject-9 {
  font-size: 18px;
  margin-left: 2px;
  margin-top: 41px;
}
.subject-10 {
  font-size: 18px;
  margin-left: -150px;
  margin-top: 10px;
}

.skills span {
  animation: bounceIn 2s linear forwards;
  -webkit-animation: bounceIn 2s linear forwards;
}

.skill-introduce {
  text-align: left;
  position: absolute;
  top: 20%;
  left: 10%;
  color: #000000;
}
.skill-introduce a {
  display: block;
  width: 40px;
  height: 40px;
}
.skill-introduce a img {
  display: block;
  width: 100%;
}
.skill-introduce .media-body p {
  font-size: 14px;
  color: #000;
  font-family: microsoft yahei, sans-serif;
}
.skill-introduce .media {
  margin-bottom: 20px;
}
.skill-introduce .media:nth-child(1) {
  opacity: 0;
  animation: bounceInLeft 2s linear forwards;
  -webkit-animation: bounceInLeft 2s linear forwards;
}
.skill-introduce .media:nth-child(2) {
  opacity: 0;
  animation: bounceInRight 2s linear forwards;
  -webkit-animation: bounceInRight 2s linear forwards;
  -webkit-animation-delay: 1s;
}
.skill-introduce .media:nth-child(3) {
  opacity: 0;
  animation: bounceInLeft 2s linear forwards;
  -webkit-animation: bounceInLeft 2s linear forwards;
  -webkit-animation-delay: 2s;
}
</style>
