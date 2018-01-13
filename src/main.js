// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
<<<<<<< HEAD
import 'assets/css/reset.css'
import 'assets/css/iconfont/iconfont.css'
=======
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import 'assets/css/reset.css'
import 'assets/css/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
>>>>>>> d65a220756467f8e25388838f634f95de898faff

FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://i04.pic.sogou.com/64ec42661f81d0b0',
  loading: 'http://img.zcool.cn/community/01439357dd73c00000018c1b3e04ce.gif',
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
