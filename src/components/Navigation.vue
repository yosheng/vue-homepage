<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Yosheng Zhang</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#">基本資料</b-nav-item>
            <b-nav-item href="#">個人成就</b-nav-item>
            <b-nav-item href="#">工作經歷</b-nav-item>
            <b-nav-item href="#">實務經驗</b-nav-item>
            <b-nav-item href="#">展望未來</b-nav-item>
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
