<template>
  <div>
    <!--第一屏-->
    <div class="slide">
      <b-container fluid>
        <b-row>
          <b-col cols="6" md="3" lg="3">
            <div class="portfolio-item">
              <div class="hover-bg">
                <div class="hover-text">
                  <h4>
                    <a
                      href="https://blog.yosheng.tw"
                      target="_blank"
                      title="個人部落格"
                      >個人部落格</a
                    >
                  </h4>
                  <small>使用 Wordpress 架設自己的部落格</small>
                  <i class="fa fa-search"></i>
                </div>
                <img
                  src="@/assets/images/page-5/01-blog.jpg"
                  class="img-fluid"
                  alt="個人部落格"
                />
              </div>
            </div>
          </b-col>
          <b-col cols="6" md="3" lg="3">
            <div class="portfolio-item">
              <div class="hover-bg">
                <div class="hover-text">
                  <h4>
                    <a
                      href="https://portfolio.yosheng.tw"
                      target="_blank"
                      title="個人回憶錄"
                      >個人回憶錄</a
                    >
                  </h4>
                  <small
                    >使用 HTML5+CSS+JQuery 建置網站並學習 Yeoman 構造工具</small
                  >
                  <i class="fa fa-search"></i>
                </div>
                <img
                  src="@/assets/images/page-5/02-portfolio.png"
                  class="img-fluid"
                  alt="個人回憶錄"
                />
              </div>
            </div>
          </b-col>
          <b-col cols="6" md="3" lg="3">
            <div class="portfolio-item">
              <div class="hover-bg">
                <div class="hover-text">
                  <h4>
                    <a
                      href="https://github.com/yosheng/Store-Management"
                      target="_blank"
                      title="商品管理系統"
                      >商品管理系統</a
                    >
                  </h4>
                  <small>使用 Bootstrap+PHP 建置不同商家會動態產生資料庫</small>
                  <i class="fa fa-search"></i>
                </div>
                <img
                  src="@/assets/images/page-5/03-Store Management.png"
                  class="img-fluid"
                  alt="商品管理系統"
                />
              </div>
            </div>
          </b-col>
          <b-col cols="6" md="3" lg="3">
            <div class="portfolio-item">
              <div class="hover-bg">
                <div class="hover-text">
                  <h4>
                    <a
                      href="http://shuaugur.appspot.com/login.jsp"
                      target="_blank"
                      title="Google App Engine"
                      >Google App Engine</a
                    >
                  </h4>
                  <small>使用 JSP+Java 並透過GAE進行部署</small>
                  <i class="fa fa-search"></i>
                </div>
                <img
                  src="@/assets/images/page-5/04-Google App Engine.jpg"
                  class="img-fluid"
                  alt="Google App Engine"
                />
              </div>
            </div>
          </b-col>
          <b-col cols="6" md="3" lg="3">
            <div class="portfolio-item">
              <div class="hover-bg">
                <div class="hover-text">
                  <h4>
                    <a
                      href="javascript:;"
                      target="_blank"
                      title="會員管理介面"
                    ></a
                    >會員管理介面
                  </h4>
                  <small>使用 ASP.NET 學習簡單CRUD操作</small>
                </div>
                <img
                  src="@/assets/images/page-5/05-Member Management.png"
                  class="img-fluid"
                  alt="會員管理介面"
                />
              </div>
            </div>
          </b-col>
          <b-col cols="6" md="3" lg="3">
            <div class="portfolio-item">
              <div class="hover-bg">
                <div class="hover-text">
                  <h4>
                    <a href="javascript:;" target="_blank" title="網路爬蟲"></a
                    >網路爬蟲
                  </h4>
                  <small>使用C# 分析html tag並將其下載至資料庫</small>
                </div>
                <img
                  src="@/assets/images/page-5/06-Web spider.jpg"
                  class="img-fluid"
                  alt="網路爬蟲"
                />
              </div>
            </div>
          </b-col>
          <b-col cols="6" md="3" lg="3">
            <div class="portfolio-item">
              <div class="hover-bg">
                <div class="hover-text">
                  <h4>
                    <a
                      href="javascript:;"
                      target="_blank"
                      title="棒球九宮格連線遊戲"
                    ></a
                    >棒球九宮格連線遊戲
                  </h4>
                  <small>使用 C# 學習 socket 連線</small>
                </div>
                <img
                  src="@/assets/images/page-5/07-baseball connection.jpg"
                  class="img-fluid"
                  alt="棒球九宮格連線遊戲"
                />
              </div>
            </div>
          </b-col>
          <b-col cols="6" md="3" lg="3">
            <div class="portfolio-item">
              <div class="hover-bg">
                <div class="hover-text">
                  <h4>
                    <a
                      href="javascript:;"
                      target="_blank"
                      title="小惡魔對戰連線遊戲"
                    ></a
                    >小惡魔對戰連線遊戲
                  </h4>
                  <small>使用 VB 學習 socket 連線</small>
                </div>
                <img
                  src="@/assets/images/page-5/08-fight connection.jpg"
                  class="img-fluid"
                  alt="小惡魔對戰連線遊戲"
                />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!--第二屏-->
    <div class="slide">
      <b-container fluid>
        <b-row>
          <swiper :options="swiperOption" class="portfolio-container">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index" class="portfolio-slide">
              <span class="tip">{{ slide.title }}</span>
              <img :src="require(`@/assets/images/page-5/${slide.img}`)"
            /></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption: {
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          clickable: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [
        {
          title: '建置網路儲存裝置',
          img: '01-build nas.jpg'
        },
        {
          title: '整合維護工具碟',
          img: '02-grub4dos.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.fp-controlArrow.fp-prev {
  -webkit-animation: shake 2s ease;
  animation: shake 2s ease;
}

.fp-controlArrow.fp-next {
  -webkit-animation: shake 2s ease;
  animation: shake 2s ease;
  -webkit-animation-delay: 0.5s;
}

.container {
  margin-top: 50px;
}

.portfolio-container {
  width: 60%;
}

.portfolio-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

    span {
    position: absolute;
    width: 100%;
    bottom: 5px;
    background-color: #000;
    color: #ffffff;
    height: 50px;
    font-size: 20px;
  }
}

.portfolio-item {
  margin-bottom: 30px;
  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
.portfolio-item:hover {
  margin-bottom: 30px;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
.portfolio-item .hover-bg {
  height: 260px;
  overflow: hidden;
  position: relative;
}
.hover-bg .hover-text {
  position: absolute;
  text-align: center;
  margin: 0 auto;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.66);
  padding: 25% 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: all 0.5s;
}
.hover-bg .hover-text > h4 {
  opacity: 0;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  transition: all 0.3s;
}
.hover-bg:hover .hover-text > h4 {
  opacity: 1;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.hover-bg .hover-text > i {
  opacity: 0;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  transition: all 0.3s;
}
.hover-bg:hover .hover-text > i {
  opacity: 1;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
}
.hover-bg:hover .hover-text {
  opacity: 1;
}

/****************************************************第二瓶********************************************/
.bxslider img {
  margin: 0 auto;
}
</style>
