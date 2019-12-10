<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#/">Yosheng Zhang</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" id="menu">
          <b-navbar-nav>
            <b-nav-item href="#/profile">基本資料</b-nav-item>
            <b-nav-item href="#/achievement">個人成就</b-nav-item>
            <b-nav-item href="#/experience">工作經歷</b-nav-item>
            <b-nav-item href="#/interest">業餘興趣</b-nav-item>
            <b-nav-item href="#/future">展望未來</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
<style></style>
