<template>
  <div>  
    <div class="search">
      <input class="search-key" type="text" name="" placeholder="输入城市名或拼音" @input="handleInputChange" @click="handleHiddenClick"/>
    </div>
    <div class="search-list" v-show="show">
      <ul>
        <li v-for="city of cityListFilter" class="city-filter">{{city.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'city-search',
  props: {
    cityListByAlp: Array
  },
  data () {
    return {
      show: false,
      cityListFilter: []
    }
  },
  computed: {
    cityListAll () {
      const cityListAll = []
      this.cityListByAlp.forEach((value, index) => {
        value[1].forEach((value, index) => {
          cityListAll.push({
            name: value.cityarea,
            spell: value.itemName
          })
        })
      })
      return cityListAll
    }
  },
  methods: {
    handleInputChange (e) {
      this.show = true
      this.$bus.$emit('click', this.show)
      const inputValue = e.target.value
      this.cityListFilter = this.cityListAll.filter((value) => {
        if (value.spell.indexOf(inputValue) > -1 || value.name.indexOf(inputValue) > -1) {
          return true
        }
      })
    },
    handleHiddenClick (e) {
      this.show = false
      e.target.value = ''
      this.$bus.$emit('show', this.show)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .search
    box-sizing: border-box
    padding: .15rem .2rem .15rem .2rem
    margin-top: .88rem
    background: $bgColor
    .search-key
      box-sizing: border-box
      padding: 0 .2rem
      display: block
      width: 100%
      line-height: .62rem
      border: 0
      border-radius: .06rem
      text-align: center
      font-size: .24rem
      color: #666
  .search-list
    z-index: 1
    position: relative
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #f5f5f5
    .city-filter
      box-sizing: border-box
      padding: 0 .3rem
      width: 100%
      line-height: .76rem
      background: #fff
      border-bottom: .02rem solid #f5f5f5
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
</style>
