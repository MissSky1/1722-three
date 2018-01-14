<template>
  <div class="container">
    <div class="con" v-for="item of list" :key="item.id">
      <div class="con-img">
        <img class="img" :src="item.imgUrl" :alt="item.alt">
      </div>
      <div class="con-right">
        <p class="con-right-top">{{item.p}}</p>
        <div class="con-right-center">
          <ul>
            <li><span>{{item.adress}}</span>{{item.sm}}</li>
          </ul>
        </div>
        <div class="price"><i class="price-d">¥</i><span class="price-q">{{item.price}}</span>起</div>
        <div class="con-right-bottom">
          已售<span>{{item.redu}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tour-con',
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    width: 100%
    height: 100%
    overflow: hidden
    .con
      display: flex
      overflow: hidden
      width: 100%
      height: 2rem
      border-bottom: .02rem solid black
      .con-img
        float: left
        width: 1.6rem
        height: 1.6rem
        margin: .2rem
        .img
          width: 1.6rem
          height: 1.6rem
      .con-right
        flex: 1
        position: relative
        margin: .2rem .2rem .2rem 0
        height: 1.6rem
        .con-right-top
          width: 100%
          font-size: .3rem
          line-height: .36rem
        .con-right-center
          position: absolute
          top: .8rem
          left: 0
          width: 100%
          height: .4rem
          line-height: .4rem
          span
            color: skyblue
        .price
          position: absolute
          top: .9rem
          right: 0
          height: .4rem
          line-height: .4rem
          color: black
          .price-d
            color: #ff8300
          .price-q
            color: #ff8300
            font-weight: 900
            font-size: .4rem
        .con-right-bottom
          position: absolute
          top: 1.2rem
          left: 0
          height: .4rem
          line-height: .4rem
          color: #ccc
</style>