<template>
  <div class="city-list" v-show="show">
    <div class="location-container">
      <h3 class="title">您的位置</h3>
      <ul class="content">
        <li class="location city">{{city}}</li>
      </ul>
    </div>
    <div class="hot-city-container">
      <h3 class="title">热门城市</h3>
      <ul class="content">
        <li class="hot-city city" v-for="(hotCity, index) of hotCityList" :key="hotCity.id" @click="handleClick">{{hotCity.city}}</li>
      </ul>
    </div>
    <div class="city-alp-container">
      <div v-for="(cityList, index) of cityListByAlp" :key="cityList.id" class="city-alp-con" ref="cityByAlp">  
        <h3 class="title">{{cityList[0]}}</h3>
        <ul class="cityByAlp-content">
          <li class="cityByAlp" v-for="(city, index) of cityList[1]" :key="city.id">{{city.cityarea}}</li>
        </ul>
      </div>
      <div class="alphabet-all">
        <div class="alphabet" v-for="(cityList, index) of cityListByAlp" :key="index" @click="handleAlpClick(index)">{{cityList[0]}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'city-list',
  data () {
    return {
      show: true
    }
  },
  props: {
    hotCityList: Array,
    cityListByAlp: Array
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.$bus.$on('click', this.handleHiddenClick.bind(this))
    this.$bus.$on('show', this.handleShowClick.bind(this))
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleHiddenClick (value) {
      this.show = false
    },
    handleShowClick () {
      this.show = true
    },
    handleClick (e) {
      this.changeCity(e.target.innerText)
      this.$router.go(-1)
    },
    handleAlpClick (index) {
      let scrollTop = this.$refs.cityByAlp[index].offsetTop
      document.documentElement.scrollTop = scrollTop - 44
      document.body.scrollTop = scrollTop - 44
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .title
    padding-left: .3rem
    line-height: .54rem
    background: #eee
    font-size: .26rem
    color: #616161
    border-bottom: .02rem solid #ccc
  .content
    box-sizing: border-box
    padding: .22rem .3rem 0 .3rem
    display: flex
    padding-right: .54rem
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
    .city
      box-sizing: border-box
      margin-bottom: .2rem
      padding: 0 .4rem
      width: 30%
      line-height: .56rem
      font-size: .28rem
      color: #212121
      text-align: center
      border: .02rem solid #c9cccd
      border-radius: .06rem
    .location
      border-color: $bgColor
      color: #00afc7
  .cityByAlp-content
    .cityByAlp
      box-sizing: border-box
      padding: 0 .3rem
      width: 100%
      line-height: .76rem
      border-bottom: .02rem solid #f5f5f5
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
  .alphabet-all
    position: fixed
    top: 25%
    right: .04rem
    .alphabet
      line-height: .33rem
      font-size: .24rem
      color: $bgColor
</style>
