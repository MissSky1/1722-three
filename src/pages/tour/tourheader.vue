<template>
  <div class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search">
      <input class="input" type="text" value="一日游">
    </div>
    <div class="submit">
      <button class="btn">搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tour-header'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .header
    display: flex
    height: .88rem
    line-height: .88rem
    background: $bgColor
    .back
      width: .58rem
      text-align: center
      font-size: .4rem
      font-weight: bold
      color: white
    .search
      display: block
      flex: 1
      height: .6rem
      line-height: .6rem
      margin: .14rem .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
      .input
        width: 100%
        border: none
    .submit
      padding:0 .4rem 0 .2rem
      position: relative
      color: white
      .btn
        border: none
        background: $bgColor
</style>