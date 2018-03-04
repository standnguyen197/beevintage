<template>
<div>
  <vue-headful
            :title="title"
            description="Description from vue-headful"
        />       
<div class="header-home">
  <nav-bar/>
  <b-container>
    <b-row>
        <b-col sm="12" md="8" offset-md="2">
          <center>
          <div class="mt-5 mb-5">
              <h1 style="
    font-size: 152px;
    font-weight: 700;
    color: #FFF;">404</h1>
          <h1 class="header-h1">KHÔNG TÌM THẤY TRANG!</h1>
          </div>
          </center>
        </b-col>
    </b-row>
  </b-container>
</div>

   <b-container>
<b-row>
        <b-col sm="12" md="12">
            <center>
<div class="mt-3">
<b-link href="#/" ><b-button size="md" variant="warning" class="mt-2" style="color: #FFF; padding: 9px 0px;
            font-weight: 500;
            cursor: pointer; width:230px;text-align:center">
               TRANG CHỦ
            </b-button></b-link>
    </div>
            </center>
        </b-col>
</b-row>
  </b-container>

  </div>
</template>

<script>

import axios from 'axios'
export default {

name: 'appPage',

  data () {
    return {

        title: 'Không tìm thấy trang!'
    }
  },

  created () {

   if(!this.$session.get('authSession')){
       location.href = '/';
   }
  },
  methods: {

  }
}
</script>
<style>
.header-home{
  background: linear-gradient(45deg,#9295e2 11%,#738ef5 88%);
  height: auto;
}
.button-begin{
  border-radius: 20px;
  padding: 0px 20px;
  border: 2px solid #FFF;
}
.header-h1{
  font-weight: 700;
  color: #FFF
}

.header-p{
  color: #FFF
}
.btn-secondary {
    color: #494848;
    background-color: #ffffff;
    border-color: #ffffff;
    padding: 9px 59px;
    font-weight: 500;
}
.bg-frontend{
  padding: 50px 20px;
}
.bg-1{
  background: #f5f6fa;
}
.box-feedback{
    background-color: white;
    border-radius: 5px;
    -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    display: block;
    padding: 1.05rem;
    margin-bottom: 5px;
}
</style>
