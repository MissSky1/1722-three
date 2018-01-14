<template>
  <div>
    <tour-header></tour-header>
    <tour-nav></tour-nav>
    <tour-con :list="tourInfo"></tour-con>
    <tour-foot></tour-foot>
  </div>
</template>

<script>
  import TourHeader from './tourheader'
  import TourNav from './tournav'
  import TourCon from './tourcon'
  import TourFoot from './tourfoot'
  import axios from 'axios'
  export default {
    name: 'tour',
    components: {
      TourHeader,
      TourNav,
      TourCon,
      TourFoot
    },
    data () {
      return {
        tourInfo: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/tour.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const datas = res.data.data
        this.tourInfo = datas.tourList
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>
  
<style></style>