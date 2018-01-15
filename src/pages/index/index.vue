<template>
  <div class="main">
  	<index-header></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icons :list="iconsInfo"></index-icons>
    <div class="city-location">
      <div class="city-left iconfont">&#xe63f;定位失败</div>
      <div class="city-right iconfont">&#xe811;5折泡温泉</div>
    </div>
    <div class="city-shop"><p class="shove">热销推荐</p></div>
    <IndexScroller class="scroller" :sights="sightsInfo"></IndexScroller>
    <div class="all-shop">
      <router-link to="/">查看所有产品</router-link><!-- 标签 -->
    </div>
    <index-travel :travel="travelInfo"></index-travel>
    <index-blogroll></index-blogroll>
  </div>
</template>

<script>
import axios from 'axios'
import IndexScroller from './scroller'
import IndexHeader from './header'
import IndexSwiper from './swiper'
import IndexIcons from './icons'
import IndexTravel from './travel'
import IndexBlogroll from './blogroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'index',
  components: {
    IndexHeader,
    IndexSwiper,
    IndexIcons,
    IndexScroller,
    IndexTravel,
    IndexBlogroll
  },
  data () {
    return {
      swiperInfo: [],
      iconsInfo: [],
      sightsInfo: [],
      travelInfo: []
    }
  },
  computed: {
    ...mapState({
      city: 'city'
    })
  },
  methods: {
    ...mapMutations(['changeCity']),
    getIndexData () {
      axios.get('/api/index.json?city=' + this.city)
      .then(this.handleGetDataSucc.bind(this))
      .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      const data = res.data.data
      this.swiperInfo = data.swiperList
      this.iconsInfo = data.iconList
      this.sightsInfo = data.sights
      this.travelInfo = data.cityList
      if (!localStorage.city) {
        this.changeCity(res.data)
      }
    },
    handleGetDataErr () {
      console.log('error')
    },
    bindEvents () {
      this.$bus.$on('cityChange', this.handleCityChange.bind(this))
    },
    handleCityChange (value) {
      this.city = value
      this.getIndexData()
    }
  },
  created () {
    this.getIndexData()
    this.bindEvents()
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl";
  .main
    display: flex
    flex-direction: column
    // position: absolute
    // left: 0
    // right: 0
    // bottom: 0
    // top: 0
    .scroller
      // flex: 1
      height: 5.76rem
      overflow: hidden
    .city-location
      display: flex
      width:100%
      margin-top: .1rem
      border-top: .01rem solid #f0f0f0
      background-color: #fff
      .city-left
        width: 3.7rem
        height: .98rem
        line-height: .98rem
        font-size: .28rem
        text-align: center
        border-right: .01rem solid #f0f0f0
        color: #212121
      .city-right
        width: 3.8rem
        height: .98rem
        line-height: .98rem
        font-size: .28rem
        text-align: center
        color: #212121
    .city-shop
      width: 100%
      height: .8rem
      line-height: .8rem
      background: $longStrip
      .shove
        margin-left: .26rem
    .all-shop
      height: .88rem
      line-height: .88rem
      text-align: center
      color: #00afc7
</style>
