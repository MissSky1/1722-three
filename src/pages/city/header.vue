<template>
  <div class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="state">
      <span class="inland">国内</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'city-header'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .header
    position: fixed
    top: 0
    left: 0
    display: flex
    width: 100%
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #fff
    .back
      width: .4rem
      padding: 0 .22rem
      font-size: .36rem
      font-weight: 600
    .state
      margin: .15rem 0 0 1.5rem
      width: 3rem
      background: #fff
      height: .56rem
      line-height: .56rem
      font-size: .28rem
      font-weight: 600
      text-align: center
      border-radius: .06rem
      .inland
        color: $bgColor 
</style>
