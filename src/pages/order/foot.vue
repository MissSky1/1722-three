<template>
  <div class="foot">
    <div class="foot-left">产品价格￥<span class="foot-price" :v-model="item">{{item}}</span><span class="iconfont foot-jt">&#xe62f;</span></div>
    <div class="foot-right">提交订单</div>
  </div>
</template>
<script>
  export default {
    name: 'order-foot',
    props: {
      index: Number
    },
    data () {
      return {
        item: 50
      }
    },
    watch: {
      'index' () {
        this.item = this.index * 50
      }
    }
  }
</script>
<style lang='stylus' scoped>
  .foot
    position: fixed
    bottom: 0
    height: 1rem
    line-height: 1rem
    width: 100%
    .foot-left
      width: 3.45rem
      height: 1rem
      display: inline-block
      color: orange
      background: #fff
      padding: 0 0 0 .3rem
      float: left
      .foot-price
        font-size: .48rem
    .foot-right
      width: 3.45rem
      height: 1rem
      background: orange
      display: inline-block
      padding: 0 0 0 .3rem
      float: left
      text-align:center
      font-size: .36rem
      color: #fff
</style>