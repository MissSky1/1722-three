<template>
  <div>
    <div class="price">
      <span class="price-title">票面价</span>
      <span class="price-desc">是指通过景区指定窗口售卖的纸质门票上标注的价格</span>
    </div>
    <div class="nav-bottom">
      <ul class="nav">
        <li><span  class="iconfont">&#xe623;</span>机票</li>
        <li><span  class="iconfont">&#xe6bc;</span>酒店</li>
        <li><span  class="iconfont">&#xe62d;</span>公寓</li>
        <li><span  class="iconfont">&#xe624;</span>更多</li>
      </ul>
    </div>
    <div class="firend">
        <router-link to="/" class="interval">登录</router-link>
        <router-link to="/">我的订单</router-link>
        <router-link to="/" class="interval">最近浏览</router-link>
        <router-link to="/">关于我们</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-blogroll'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .price
    width: 100%
    height: .5rem
    .price-title
      line-height: .5rem
      margin-left: .3rem
      font-weight: 600
      font-size: .24rem
      color: $fontColor
    .price-desc
      font-size: .24rem
      color: $fontColor
  .nav-bottom
    height: .6rem
    background: #f3f3f3
    .nav
      display:flex
      justify-content: space-around
      height: .6rem
      line-height: .6rem
      font-size: .24rem
      color: $fontColor
  .firend
    display:flex
    height: .8rem
    line-height: .8rem
    background: #f3f3f3
    .interval
      margin: 0 .4rem 0 .4rem
</style>
