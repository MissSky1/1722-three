<template>
  <div class="header">
    <div class="header-con"> 
      <div class="back iconfont" @click="handleBackClick">&#xe624;</div>
      国内城市
    </div>
  </div>
</template>
<script>
export default {
  name: 'city-header',
  methods: {
    handleBackClick () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .header
    position: fixed
    left: 0
    top: 0
    width: 100%
    .header-con
      position: relative
      height: .88rem
      line-height: .88rem
      background: $bgColor
      text-align: center
      font-size: .36rem
      color: #fff
      .back
        position: absolute
        left: 0
        top: 0
        width: .84rem
        font-size: .44rem
        font-weight: bold
</style>