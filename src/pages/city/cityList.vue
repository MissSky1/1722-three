<template>
  <div>
    <div class="location-container">
      <h3 class="city-title">您的位置</h3>
      <ul class="city-list">
        <li class="location city">{{city}}</li>
      </ul>
    </div>
    <div class="hot-city-container">
      <h3 class="city-title">热门城市</h3>
      <ul class="city-list">
        <li class="hot-city city" v-for="(item, index) of hotCity" :key="item.id">{{item.city}}</li>
      </ul>
    </div>
    <div class="city-alphabet-container">
      <div v-for="alpCityArr of cityByAlp">  
        <h3 class="city-title">{{alpCityArr[0]}}</h3>
        <ul class="city-list-alphabet">
          <li class="city-alp" v-for="city of alpCityArr[1]">{{city.cityarea}}</li>
        </ul>
      </div>
    </div>
    <div class="alphabet-container">
      <div class="alphabet" v-for="alpCityArr of cityByAlp">{{alpCityArr[0]}}</div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'city-list',
  props: {
    city: String,
    hotCity: Array,
    cityByAlp: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .city-title
    padding-left: .3rem
    background: #f5f5f5
    line-height: .54rem
    color: #616161
    font-size: .26rem
    border-bottom: .02rem solid #ccc
  .city-list
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
    padding: .02rem .3rem .22rem .3rem 
    background: #fff
    .city
      box-sizing: border-box
      padding: .08rem .5rem
      margin-top: .2rem
      width: 30%
      line-height: .4rem
      color: #212121
      font-size: .26rem
      text-align: center
      border: .02rem solid #c9cccd
      border-radius: .06rem
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
    .location
      border-color: #00afc7
      color: #00afc7
  .city-list-alphabet
    background: #fff 
    .city-alp
      padding-left: .3rem
      width: 100%
      line-height: .76rem
      color: #212121
      font-size: .28rem
      border-bottom: .02rem solid #f5f5f5
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
  .alphabet-container
    position: fixed
    right: 0
    top: 25%
    .alphabet
      padding-right: .1rem
      line-height: .33rem
      font-size: .24rem
      color: #00afc7
      text-align: center
</style>
