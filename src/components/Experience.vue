<template>
  <div>
    <b-container fluid>
      <b-row class="d-none d-md-block">
        <b-col cols="12">
          <span class="title" style="display: inline-block">工作經歷</span>
        </b-col>
      </b-row>
      <b-row class="d-none d-md-block">
        <b-col cols="12">
          <span class="sign" style="font-size: 20px">衷於學習 樂於分享</span>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6" md="3">
          <div class="thumbnail">
            <img
              src="~@/assets/images/page-4/01-shu.jpg"
              class=" rounded-circle team-img"
              alt=""
            />
            <div class="caption">
              <h3>世新大學</h3>
              <p>維修工讀生</p>
              <p>基本軟硬體維修和Linux工作站服務架設與管理</p>
            </div>
          </div>
        </b-col>
        <b-col cols="6" md="3">
          <div class="thumbnail">
            <img
              src="~@/assets/images/page-4/02-asus.jpg"
              class="rounded-circle team-img"
              alt=""
            />
            <div class="caption">
              <h3>華碩</h3>
              <p>校園實習生</p>
              <p>市場的行銷學和產品檢測流程管理</p>
            </div>
          </div>
        </b-col>
        <b-col cols="6" md="3">
          <div class="thumbnail">
            <img
              src="~@/assets/images/page-4/03-sce.jpg"
              class="rounded-circle team-img"
              alt=""
            />
            <div class="caption">
              <h3>文化大學</h3>
              <p>程式設計師</p>
              <p>後端程式開發和系統規劃與建置</p>
            </div>
          </div>
        </b-col>
        <b-col cols="6" md="3">
          <div class="thumbnail">
            <img
              src="~@/assets/images/page-4/04-sweetome.jpg"
              class="rounded-circle team-img"
              alt=""
            />
            <div class="caption">
              <h3>斯维登</h3>
              <p>软件开发工程师</p>
              <p>全栈开发和系统维护</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.title {
  -webkit-animation: flipInY 2s linear;
  animation: flipInY 2s linear;
}

.container {
  display: none;
}

.sign {
  margin-top: 20px;
  margin-bottom: 20px;
  -webkit-animation: flip 1s linear;
  animation: flip 1s linear;
  color: transparent;
  text-shadow: 0 0 6px #f96, -1px -1px #fff, 1px -1px #444;
}
.experience {
  height: 100px;
}
.team-img {
  width: 120px;
  height: 120px;
}
.thumbnail {
  display: block;
  background-color: transparent;
  border: 0;
}

.thumbnail .caption {
  color: rgb(255, 140, 0);
  text-shadow: 1px 1px 1px #4442a9;

  font-family: inherit;
}
h3 {
  font-size: 16px;
  font-weight: 700;
}
p {
  font-size: 16px;
  font-weight: 700;
}
.thumbnail .team-img {
  border: 4px solid transparent;
  -webkit-animation: team-img 3s linear infinite;
  animation: team-img 3s linear infinite;
}
.thumbnail {
  margin: 0;
}
</style>
