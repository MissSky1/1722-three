<template>
  <div>
    
    <div class="header">
      <div class="header-left iconfont">&#xe624;</div>
      <span class="header-center">订单填写</span>
      <span><a href="#" class="header-right">登录</a></span>
    </div>

    <div class="desc">
      <div class="desc-left">
        <div class="desc-lt">【上午场】故宫成人票+故宫全景手绘图</div>
        <div class="desc-ld">
          <span class="iconfont desc-ldl">&#xe64d;</span>
          <span class="desc-ldtxt">2018-1-11</span>
          <span class="iconfont desc-ldr">&#xe71b;</span>
          <span class="desc-ldtxt">不可退</span>
        </div>
      </div>
      <div class="desc-right">
        <div class="desc-rt">
          <span class="desc-price">￥<span class="price">50</span></span>
          <span class="desc-num">起/张</span>
        </div>
        <div class="desc-rb">预订须知</div>
      </div>
    </div>
     
    <div class="block1"></div> 

    <div class="buy">
      <span class="buy-index">购买数量</span>
      <span class="buy-desc">最多购买5张</span>
      <div class="buy-count">
        <span class="buy-desc" @click="handleDesc">
          <div class="buy-desc-min"></div>
        </span>
        <input class="buy-num" type="text" name="" :value="inputValue">
        <span class="buy-increa" @click="handleIncrease">
          <div class="buy-desc-max"></div>
          <div class="buy-desc-min"></div> 
        </span>
      </div>  
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order-header',
    data () {
      return {
        inputValue: 1
      }
    },
    methods: {
      handleDesc () {
        if (this.inputValue - 1 >= 1) {
          this.inputValue = this.inputValue - 1
          this.$emit('change', this.inputValue)
        }
      },
      handleIncrease () {
        if (this.inputValue + 1 <= 5) {
          this.inputValue = this.inputValue + 1
          this.$emit('change', this.inputValue)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .header
    display: flex
    justify-content: space-between
    padding: 0 .2rem
    height: .88rem
    line-height: .88rem
    background: $bgColor
    color: #fff
    .header-center
      font-size: .32rem
      font-weight: 500
    .header-right
      color: #fff
      font-size: .28rem
  .desc
    min-height: 1.3rem
    background: #fff
    justify-content: space-between
    height: .83rem
    padding: .2rem .2rem .1rem .2rem
    margin-bottom: .3rem
    .desc-left
      margin-right: .17rem
      float: left
      .desc-lt
        width: 5.0rem
        color: #212121
        font-size: .32rem
        line-height: .4rem
      .desc-ld
        float: left
        line-height: .44rem
        margin-left: .2rem
        color: #616161
        font-size: .24rem
        .desc-ldl
          color: $bgColor
        .desc-ldr
          color: red
    .desc-right
      float: left
      width: 1.9rem
      text-align: right
      .desc-rt
        font-size: .24rem
        line-height: .44rem
        .desc-price
          color:orange
          .price
            font-size: .44rem
            margin-right: .07rem
        .desc-num
          color: #9e9e9e
      .desc-rb
        line-height: .32rem
        margin-top: .12rem
        font-size: .28rem
        color: $bgColor
  .buy
    padding: .3rem .2rem .3rem .2rem
    background: #fff
    height: .7rem
    .buy-index
      font-size: .3rem
      line-height: .7rem
      color: #616161
      width: 1.6rem
      float: left
    .buy-desc
      font-size: .28rem
      color: #ccc
      float: left
      line-height: .7rem
    .buy-count
      width: 2rem
      height: .6rem
      background: pink
      float: left
      margin-left: 1.6rem
      border: 1px solid #ccc
      .buy-desc
        position: relative
        width: .6rem
        height: .6rem
        background: $bgColor
        float: left
        .buy-desc-min
          position: absolute
          top: .26rem
          left: .12rem
          width: .3rem
          height: .06rem
          background: #fff
      .buy-num
        width: .4rem
        height: .6rem
        padding: 0 .2rem
        border:none
        float:left
      .buy-increa
        float:left
        width: .6rem
        height: .6rem
        float: left
        position: relative
        background: $bgColor
        .buy-desc-max
          position: absolute
          top: .15rem
          left: .27rem
          width: .06rem
          height: .28rem
          background: #fff
        .buy-desc-min
          position: absolute
          top: .26rem
          left: .16rem
          width: .3rem
          height: .06rem
          background: #fff
</style>