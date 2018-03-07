<template>
<div>
    <router-view/>
</div>
</template>

<script>
import Vue from 'vue'
import vueHeadful from 'vue-headful'

Vue.component('vue-headful', vueHeadful)
Vue.component('nav-bar', {
  template: `
  <div>
  <b-navbar toggleable="md" type="dark" class="trans-bg">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#/">BeeVintage</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#/tinh-nang">Tính năng</b-nav-item>
      <b-nav-item href="#/huong-dan">Hướng dẫn</b-nav-item>
      <b-nav-item href="#/ho-tro">Hỗ trợ</b-nav-item>
      <b-nav-item href="#/phan-hoi">Phản hồi</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-navbar-nav right>
      
      <b-nav-item href="#/dang-nhap" size="sm" class="button-begin" >ĐĂNG NHẬP</b-nav-item>
    </b-navbar-nav>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
  </div>
  `
})

Vue.component('nav-bar-cpanel', {
  template: `
<b-navbar toggleable="sm" type="dark" variant="dark" style="position: relative;
    padding: 0.1rem 1rem;">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">NavBar</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
    <b-btn v-b-toggle.collapse1 variant="dark" class="btn-menu" 
    style="border:0px;
     color: rgb(255, 255, 255);
     cursor: pointer;
    background: #343a4000;
    box-shadow: none;
}"><icon name="reorder" style="margin-top: 6px"></icon></b-btn>
      <b-nav-item href="#"><b-btn size="sm" variant="outline-secondary" style="cursor: pointer;"> Tiện ích </b-btn></b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

<b-navbar-nav class="right">
<b-nav-item href="#/app/nang-cap"><b-btn size="sm" variant="warning" style="cursor: pointer;"> NÂNG CẤP </b-btn></b-nav-item>
</b-navbar-nav>
    <b-btn v-b-toggle.collapse2 variant="dark" class="btn-menu right" 
    style="border:0px;
     color: rgb(255, 255, 255);
     cursor: pointer;
    background: #343a4000;
    box-shadow: none;
}"><icon name="podcast" style="margin-top: 6px"></icon></b-btn>

      <b-nav-item-dropdown right >
        <!-- Using button-content slot -->
        <template slot="button-content" >
          <img :src="this.$session.get('authSession').userData.picture" class="img-avatar-cpanel">
        </template>
        <b-dropdown-item href="#" style="color: #75797d;">Trang cá nhân</b-dropdown-item>
        <b-dropdown-item href="#" style="color: #75797d;">Cài đặt</b-dropdown-item>
        <b-dropdown-item href="#" style="color: #75797d;">Trang thái</b-dropdown-item>
        <b-dropdown-item href="#" style="color: #75797d;">Đăng xuất</b-dropdown-item>

      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
  `
})

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
.dropdown-menu{
    background: #444b52;
    border-top: 3px solid #2c2f31;
    border-radius: 0px;
}
.img-avatar-cpanel{
    width: 27px;
    border-radius: 20px;
    border: 1px solid #adadad;
}

</style>
