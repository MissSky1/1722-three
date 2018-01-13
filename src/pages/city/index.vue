<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :city="city" :hotCity="hotCity" :cityByAlp="cityByAlp"></city-list> 
  </div>
</template>

<script>
import CityHeader from './header'
import CitySearch from './search'
import CityList from './cityList'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
  data () {
    return {
      city: '',
      hotCity: [],
      cityByAlp: []
    }
  },
  methods: {
    getCityList () {
      axios.get('/api/cityList.json')
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      const data = res.data.data
      this.city = data.city
      this.hotCity = data.hotCity
      this.cityByAlp = data.cityByAlp
    },
    handleGetDataErr () {
      console.log('error')
    }
  },
  created () {
    this.getCityList()
  }
}
</script>

<style></style>
