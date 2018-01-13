<template>
  <div class="search">
    <input type="text" name="" placeholder="输入城市名或拼音" class="search-key">
  </div>
</template>

<script>
export default {
  name: 'city-search'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .search
    margin-top: .88rem
    padding: 0 .3rem .1rem .2rem
    background: $bgColor
    font-size: .26rem
    color: #9e9e9e
    .search-key
      padding: .16rem 0 .16rem .1rem
      width: 100%
      height: .3rem
      line-height: .3rem
      background: #fff      
      border: 0
      border-radius: .06rem
      text-align: center 
</style>
