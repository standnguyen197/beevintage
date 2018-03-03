<template>
<div>
  <vue-headful
            :title="fields.title.label"
            description="Description from vue-headful"
        />
<div class="header-home">
  <nav-bar/>
  <b-container>
    <b-row>
        <b-col sm="12" md="8" offset-md="2">
          <center>
          <div class="mt-5 mb-5">
          <h1 class="header-h1">Hướng dẫn sử dụng BeeVintage</h1>
          </div>
          </center>
        </b-col>
    </b-row>
  </b-container>
</div>
 
  <div>
     <b-container>
      <b-row>

     <b-col sm="12" md="12" class="bg-frontend">
      <h2 >
        Tính năng
      </h2>
   <ul class="mt-4">
     <li>Tạo mã sản phẩm theo ý muốn (Tăng dần , giảm dần , ngẫu nhiên...)</li>
     <li>Bắt số liệu người mua chuẩn xác (Xem ai là người comment nhanh nhất)</li>
     <li>Hiển thị thông tin liên hệ với khách hàng (Link trang cá nhân , link message..)</li>
     <li>Hiển thị thông tin khách hàng phụ (Nếu người đầu không mua thì người phụ sẽ thay thế)</li>
     <li>Thông kê lượng sản phẩm bán theo thời gian (Ngày ,tháng , năm)</li>
   </ul>
    </b-col>
      </b-row>
     </b-container>
</div>
  <div class="bg-1">
    <b-container>
    <b-row>
    <b-col sm="12" md="6" class="bg-frontend">
      <div>
      <h2>
        Phản hồi
      </h2>
      <p>
        <ul class="mt-4">
          <li>Đang nhận được nhiều Feedback tốt từ phía khách hàng sử dụng!</li>
          <li>Chúng tôi luôn cố gắng tạo ra những giá trị đích thực cho bạn!</li>
          <li>Chúng tôi không ngừng phát triển sản phẩm của mình lên tầm cao mới.</li>
          <li>"Và bạn có giám thử nó?"</li>
          </ul>
         <center> <b-link href="#/dang-nhap"><b-button size="md" variant="warning" class="mt-2" style="color: #494848; padding: 9px 0px;
            font-weight: 500;
            cursor: pointer; width:230px;text-align:center">
               Thử 14 ngày miễn phí
            </b-button></b-link>
         </center>
        </p>
      </div>
    </b-col>
     <b-col sm="12" md="6" class="bg-frontend">
      <div>
      <div class="box-feedback">
        <strong>Trần Hương</strong>
        <p>App hay quá đi!</p>
        <icon name="star" style="color:#ffb300"></icon>
        <icon name="star" style="color:#ffb300"></icon>
        <icon name="star" style="color:#ffb300"></icon>
        <icon name="star" style="color:#ffb300"></icon>
        <icon name="star" style="color:#ffb300"></icon>
      </div>
      <div class="box-feedback">
        <strong>Vũ Nhung</strong>
        <p>App hay! Nhưng vẫn chưa hiểu nhiều chỗ</p>
       <icon name="star" style="color:#ffb300"></icon>
        <icon name="star" style="color:#ffb300"></icon>
        <icon name="star" style="color:#ffb300"></icon>
        <icon name="star" style="color:#ffb300"></icon>
        <icon name="star"></icon>
      </div>
      <div class="box-feedback">
        <strong>Hoa Lan Trần</strong>
        <p>Cho 5 sao!</p>
        <icon name="star" style="color:#ffb300"></icon>
        <icon name="star" style="color:#ffb300"></icon>
        <icon name="star" style="color:#ffb300"></icon>
        <icon name="star" style="color:#ffb300"></icon>
        <icon name="star" style="color:#ffb300"></icon>
      </div>
      </div>
    </b-col>
      </b-row>
    </b-container>
  </div>

  </div>
</template>

<script>

import axios from 'axios'
export default {

  name: 'GuidePage',
  data () {
    return {
      imgbg: '/static/photo/bg.jpg',
      imgbg_feedback: '/static/photo/bg-feedback.jpg',
      fields: {
        isbn: { label: 'ISBN', sortable: true, 'class': 'text-center' },
        title: { label: 'BeeVintage', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      books: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/book`)
    .then(response => {
      this.books = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
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
