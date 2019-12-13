<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="resume">
      <b-navbar-brand data-menuanchor="home" href="#home">Yosheng Zhang</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" id="menu">
          <b-navbar-nav>
            <b-nav-item data-menuanchor="profile" class="active" href="#profile">基本資料</b-nav-item>
            <b-nav-item data-menuanchor="achievement" href="#achievement">個人成就</b-nav-item>
            <b-nav-item data-menuanchor="experience" href="#experience">工作經歷</b-nav-item>
            <b-nav-item data-menuanchor="interest" href="#interest">業餘興趣</b-nav-item>
            <b-nav-item data-menuanchor="future" href="#future">展望未來</b-nav-item>
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
<style scoped lang="scss">
/**********************導航條**********************************/

.resume {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
  border: none;
}

.navbar {
  background: rgba(0, 0, 0, 0);
  transition: 1s all ease;
}

.navbar.blue {
  background: rgba(71, 166, 173, 1);
}

.navbar.black {
  background: rgba(51, 51, 51, 0.7);
}

.resume .navbar-brand,
.resume .navbar-brand:visited,
.resume .navbar-brand:hover {
  color: #a7e615;
  font-size: 18px;
}

.resume .navbar-right li a,
.resume .navbar-right li a:visited {
  color: #ffffff !important;
  font-weight: 500;
  text-decoration: none;
}

.resume .navbar-right li a:hover {
  color: #ffffff !important;
  text-decoration: none;
}

.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:visited,
.navbar-default .navbar-nav > .active > a:focus {
  color: #ffffff;
  background-color: #0f698a;
  text-decoration: none;
}

.navbar-default .navbar-toggle {
  background-color: #122b40;
}

.navbar-default .navbar-toggle:focus {
  background-color: #122b40;
}

.navbar-default .navbar-toggle:hover {
  background-color: #122b40;
}

/********************導航條End***************************************/
</style>
