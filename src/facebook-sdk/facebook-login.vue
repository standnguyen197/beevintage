<template>
  <div class="facebook-login">
     <b-button size="md" variant="warning" class="mt-5" style="    background-color: #3b5998;
    border-color: #3b5998;color: #494848; padding: 9px 0px;margin-top:30px;
            font-weight: 500;
            cursor: pointer; width:230px;text-align:center;color:#FFF" @click="buttonClicked">
               {{getButtonText}}
            </b-button>
  </div>
</template>

<script>
// Helpers
import {
  loadFbSdk,
  getFbLoginStatus,
  fbLogout,
  fbLogin
} from './helpers.js'

// Resources
import icon from './icon.png'

export default {
  name: 'facebook-login',
  props: {
    appId: {
      type: String,
      required: true
    },
    version: {
      type: String,
      default: 'v2.10'
    },
    logoutLabel: {
      type: String,
      default: 'ĐĂNG XUẤT FACEBOOK'
    },
    loginLabel: {
      type: String,
      default: 'ĐĂNG NHẬP FACEBOOK'
    },
    loginOptions: {
      type: Object,
      default: function() {
        return {
          scope: 'email'
        }
      }
    }
  },
  data() {
    return {
      isWorking: false,
      isConnected: false,
      icon
    }
  },
  mounted() {
    this.isWorking = true
    loadFbSdk(this.appId, this.version)
      .then(getFbLoginStatus)
      .then(response => {
        if (response.status === 'connected') {
          this.isConnected = true
        }
        this.isWorking = false
        /** Event `get-initial-status` to be deprecated in next major version! */
        this.$emit('get-initial-status', response)
        this.$emit('sdk-loaded', {
          isConnected: this.isConnected,
          FB: window.FB
        })
      })
  },
  computed: {
    getButtonText() {
      if (this.isConnected || this.$session.get('authSession')) {
          return this.logoutLabel
      }else{
        return this.loginLabel
      }
    }
  },
  methods: {
    buttonClicked() {
      this.$emit('click')
      if (this.isConnected) {
       return this.logout()
      } else {
        return this.login()
      }
    },
    login() {
      this.isWorking = true
      fbLogin(this.loginOptions)
        .then(response => {
          if (response.status === 'connected') {
            this.isConnected = true
          } else {
            this.isConnected = false
          }
          this.isWorking = false
          this.$emit('login', {
            response,
            FB: window.FB
          })
        })
    },
    logout() {
      this.isWorking = true
      fbLogout()
        .then(response => {
          this.isWorking = false
          this.isConnected = false
          this.$emit('logout', response)
        }
        )
    }
  }
}
</script>

<style scoped>
.facebook-login {
  box-sizing: border-box;
}

.facebook-login * {
  box-sizing: inherit;
}

.facebook-login button {
  border: none;
  color: #fff;
  position: relative;
  line-height: 34px;
  min-width: 225px;
  padding: 0 15px 0px 46px;
  
}

.facebook-login .spinner {
  left: 5px;
  width: 30px;
  height: 90%;
  display: block;
  border-radius: 50%;
  position: absolute;
  border: 5px solid #f3f3f3;
  border-top-color: #3498db;
  animation: facebook-login-spin 2s linear infinite;
}

.facebook-login img {
  position: absolute;
  top: 3px;
  left: 10px;
  width: 30px;
}

@keyframes facebook-login-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
