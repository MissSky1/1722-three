<template>
  <div class="main"> 
    <city-header></city-header>
    <city-search :cityListByAlp="cityListByAlp"></city-search>
    <city-list class="list"
              :hotCityList="hotCityList"
              :cityListByAlp="cityListByAlp">
    </city-list>
  </div> 
</template>

<script>
import CityHeader from './header'
import CitySearch from './search'
import CityList from './list'
import axios from 'axios'
export default {
  name: 'city-index',
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
  data () {
    return {
      hotCityList: [],
      cityListByAlp: []
    }
  },
  methods: {
    getCityListInfo () {
      axios.get('/api/cityList.json')
        .then(this.handleGetCityListSucc.bind(this))
        .catch(this.handleGetCityListErr.bind(this))
    },
    handleGetCityListSucc (res) {
      const data = res.data.data
      this.city = data.city
      this.hotCityList = data.hotcity
      this.cityListByAlp = data.china
    },
    handleGetCityListErr () {
      console.log('error')
    }
  },
  created () {
    this.getCityListInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .main
    display: flex
    flex-direction: column
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    .list
      flex: 1
</style>