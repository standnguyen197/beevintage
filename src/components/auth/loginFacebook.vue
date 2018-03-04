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
        <h1 class="header-h1">Đăng nhập để sử dụng BeeVintage</h1>
        <p class="header-p">Chúng tôi đảm bảo khi bạn đăng nhập bằng Facebook thì tài khoản của bạn hoàn toànd được bảo mật tại BeeVintage của chúng tôi!</p>
          
          </div>
          </center>
        </b-col>
    </b-row>
  </b-container>
</div>
  <div>
     <b-container>
      <b-row>
     <b-col sm="12" md="12" >
      <h2 >
        <center> 
  <div v-if="isConnected"
      style="margin-top:30px;"  class="col-sm-12 col-md-8 offset-md-0">
  <div class='card card-profile text-center'>
  <img alt='' class='card-img-top' :src="pictureCover">
  <div class='card-block'>
    <img alt='' class='card-img-profile' :src="picture">
    <center>
    <h4 class='card-title' style="text-align:center">
      {{name}}
      <small style="text-align:center">WEBCOME TO BEEVINTAGE!</small>
    </h4>
    </center>
    <div class='card-links'>
  <b-link href="#/app"><b-button size="md" variant="warning" style="
   color: #494848;
    padding: 9px 0px;
    font-weight: 500;
    cursor: pointer;
     width:230px;
     text-align:center;
     color:#FFF;
     line-height: 34px;">
               VÀO APP NÀO
            </b-button>
          </b-link>
         <b-button size="md" variant="warning"  style="    background-color: #3b5998;
    border-color: #3b5998;color: #494848; padding: 9px 0px;
            font-weight: 500;
            cursor: pointer; width:230px;text-align:center;color:#FFF;line-height: 34px;" @click="onLogout">
               ĐĂNG XUẤT FACEBOOK
            </b-button>
    </div>
  </div>
</div>  
    </div>
    <div v-else-if="this.$session.get('authSession')"
       style="margin-top:30px;" class="col-sm-12 col-md-8 offset-md-0">
        <div class='card card-profile text-center'>
  <img alt='' class='card-img-top' :src="this.$session.get('authSession').userData.cover">
  <div class='card-block'>
    <img alt='' class='card-img-profile' :src="this.$session.get('authSession').userData.picture">
    <center>
    <h4 class='card-title' style="text-align:center">
      {{this.$session.get('authSession').userData.name}}
      <small style="text-align:center">WEBCOME TO BEEVINTAGE!</small>
    </h4>
    </center>
    <div class='card-links'>
  <b-link href="#/app"><b-button size="md" variant="warning" style="
   color: #494848;
    padding: 9px 0px;
    font-weight: 500;
    cursor: pointer;
     width:230px;
     text-align:center;
     color:#FFF;
     line-height: 34px;">
               VÀO APP NÀO
            </b-button>
          </b-link>
     <b-button size="md" variant="warning"  style="    background-color: #3b5998;
    border-color: #3b5998;color: #494848; padding: 9px 0px;
            font-weight: 500;
            cursor: pointer; width:230px;text-align:center;color:#FFF;line-height: 34px;" @click="onLogoutSesion">
               ĐĂNG XUẤT FACEBOOK
            </b-button>
  
    </div>
  </div>
</div>  
    </div>  

<div v-else> 
  <facebook-login class="button"
      appId="126856184657575"
      @login="onLogin"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded">
    </facebook-login>
</div>          
         </center>
        
      </h2>

    </b-col>
      </b-row>
     </b-container>
</div>

  </div>
</template>

<script>
    import axios from 'axios'
    import facebookLogin from '../../facebook-sdk/index'
    export default {
        name: 'loginFacebook',
        data() {
            return {
                title: 'Đăng nhập sử dụng BeeVintage',
                isConnected: false,
                name: '',
                email: '',
                personalID: '',
                gender: '',
                picture: '',
                pictureCover: '',
                FB: undefined
            }
        },
        components: {
            facebookLogin
        },
        methods: {
            getUserData() {
                this.FB.api('/me', 'GET', {
                        fields: 'id,name,email,gender,link,picture,cover'
                    },
                    userInformation => {
                        this.personalID = userInformation.id;
                        this.email = userInformation.email;
                        this.gender = userInformation.gender;
                        this.name = userInformation.name;
                        this.link = userInformation.link;
                        this.pictureCover = userInformation.cover.source;
                        this.picture = `https://graph.facebook.com/${userInformation.id}/picture?type=large`;
                        // Set biến
                        var personID = this.personalID;
                        var personEmail = this.email;
                        var personName = this.name;
                        var personGender = this.gender;
                        var personLink = this.link;
                        var personPictureCover = this.pictureCover;
                        var personPicture = this.picture;
                        // Send API Auth!
                        axios.post(`http://localhost:3000/apiAuth`, {
                                personID,
                                personEmail,
                                personName,
                                personLink,
                                personPictureCover,
                                personPicture
                            })
                            .then(response => {
                                // JSON responses are automatically parsed.
                                if(response.status == 200){
                                  this.$session.start()
                                  this.$session.set('authSession', response.data)
                                }
                            })
                            .catch(e => {
                                this.errors.push(e)
                            })
                        // Send API Auth!
                    }
                )
            },
            sdkLoaded(payload) {
                this.isConnected = payload.isConnected
                this.FB = payload.FB
                if (this.isConnected) this.getUserData()
            },
            onLogin() {
                this.isConnected = true
                this.getUserData()
            },
            onLogout() {
                this.isConnected = false;
                this.$session.destroy();
                location.href = '/';
            },
            onLogoutSesion(){
                this.$session.destroy();
                location.href = '/';
            }
        }


    }
</script>
<style>
    .header-home {
        background: linear-gradient(45deg, #9295e2 11%, #738ef5 88%);
        height: auto;
    }

    .button-begin {
        border-radius: 20px;
        padding: 0px 20px;
        border: 2px solid #FFF;
    }

    .header-h1 {
        font-weight: 700;
        color: #FFF
    }

    .header-p {
        color: #FFF
    }

    .btn-secondary {
        color: #494848;
        background-color: #ffffff;
        border-color: #ffffff;
        padding: 9px 59px;
        font-weight: 500;
    }

    .bg-frontend {
        padding: 50px 20px;
    }

    .bg-1 {
        background: #f5f6fa;
    }

    .box-feedback {
        background-color: white;
        border-radius: 5px;
        -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
        box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
        color: #4a4a4a;
        display: block;
        padding: 1.05rem;
        margin-bottom: 5px;
    }

    .card-profile {
        max-width: 100%;
        margin: 50px auto;
        background-color: #e6e5e1;
        border-radius: 0;
        border: 0;
        box-shadow: 1em 1em 2em rgba(0, 0, 0, 0.2);
    }

    .card-profile .card-img-profile {
        max-width: 100%;
        border-radius: 50%;
        margin-top: -95px;
        margin-bottom: 35px;
        border: 5px solid #e6e5e1;
    }

    .card-profile .card-img-top {
        border-radius: 0;
        height: 201px;
    }

    .card-profile .card-title {
        margin-bottom: 50px;
    }

    .card-profile .card-title small {
        display: block;
        font-size: .6em;
        margin-top: .2em;
    }

    .card-profile .card-links {
        margin-bottom: 25px;
    }

    .card-profile .card-links .fa {
        margin: 0 1em;
        font-size: 1.6em;
    }

    .card-profile .card-links .fa:focus,
    .card-profile .card-links .fa:hover {
        text-decoration: none;
    }

    .card-profile .card-links .fa.fa-dribbble {
        color: #ea4b89;
        font-weight: bold;
    }

    .card-profile .card-links .fa.fa-dribbble:hover {
        color: #e51d6b;
    }

    .card-profile .card-links .fa.fa-twitter {
        color: #68aade;
    }

    .card-profile .card-links .fa.fa-twitter:hover {
        color: #3e92d5;
    }

    .card-profile .card-links .fa.fa-facebook {
        color: #3b5999;
    }

    .card-profile .card-links .fa.fa-facebook:hover {
        color: #2d4474;
    }
</style>