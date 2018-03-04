import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
import guidePage from '@/components/layout/guidePage'
import trialPage from '@/components/layout/trialPage'
import loginFacebook from '@/components/auth/loginFacebook'
import PageNotFound from '@/components/error/pageNotFound'
import appPage from '@/components/cPanel/'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: indexPage
    },
    {
      path: "*",
      component: PageNotFound
    },
     {
       path: '/huong-dan',
       name: 'guidePage',
       component: guidePage
     },
     {
      path: '/dung-thu',
      name: 'trialPage',
      component: trialPage
    },
    {
      path: '/dang-nhap',
      name: 'loginFacebook',
      component: loginFacebook
    }
    ,
    {
      path: '/app',
      name: 'appPage',
      component: appPage
    }
  ]
})
