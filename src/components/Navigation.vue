<template>
  <div class="navbar">
    <div class="colum">
      <div class="home">
        <i
          class="lni-home size-md "
          :class="{ 'lni-tada-effect': showHome }"
          id="home"
          @click="showHome = !showHome"
        ></i>
        <h4 v-if="showHome" style="margin-top: 8px; color: #ffff;">Home</h4>
      </div>

      <div class="check">
        <i
          class="lni-check-mark-circle size-md"
          :class="{ 'lni-tada-effect': showCheck }"
          id="check"
          @click="showCheck = !showCheck"
        ></i>
        <h4 v-if="showCheck" style="margin-top: 8px; color: #ffff;">Check</h4>
      </div>

      <div class="coin">
        <i
          class="lni-coin size-md"
          :class="{ 'lni-tada-effect': showCoin }"
          id="coin"
          @click="showCoin = !showCoin"
        ></i>
        <h4 v-if="showCoin" style="margin-top: 8px; color: #ffff;">Coin</h4>
      </div>

      <div class="user">
        <i
          class="lni-user size-md"
          :class="{ 'lni-tada-effect': showUser }"
          id="user"
          @click="showUser = !showUser"
        ></i>
        <h4 v-if="showUser" style="margin-top: 8px; color: #ffff;">User</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showHome: false,
      showCheck: false,
      showCoin: false,
      showUser: false,
      effect: 'lni-tada-effect'
    }
  },
  methods: {}
}
</script>
<style>
.navbar {
  width: 100%;
  height: 60px;
  background-color: #192a56;
  top: 0;
  position: fixed;
  box-shadow: 0.1px 0.1px 15px 0.1px #273c75;
  border-radius: 10px;
  display: flex;
}
#home {
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
#check {
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
#coin {
  margin-left: 0;
  margin-top: 2px;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
#user {
  margin-left: 0;
  color: #ffff;
  transition: width 0.5s, background-color 0.5s, border-radius 0.5s;
}
.colum {
  display: flex;
  width: 95%;
  height: 40px;
  margin-top: 10px;
  margin-left: 10px;
}
.home {
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.check {
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.coin {
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.user {
  width: 80px;
  height: 34px;
  margin-left: 20px;
  display: flex;
}
.clicked {
  width: 100px;
  height: 34px;
  background-color: #feca57;
  border-radius: 10px;
  transition: background-color 0.3s, border-radius 0.5s, width 0.5s;
}
</style>
