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

export default {
  name: 'app',
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
</style>
