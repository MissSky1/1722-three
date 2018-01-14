<template>
  <div ref="scroller">
    <div class="content">
      <div class="item" v-for="item in sights" :key="item.id">
        <img class="item-img" v-lazy="item.imgUrl">
        <div class="item-content">
          <p class="item-title">
            <router-link to="/" class="slip"><!-- 链接 -->
            {{item.title}}
            </router-link>
          </p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">
            <span class="price-tag">&yen;</span>
            {{item.price}}
            <span class="price-start">起</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'index-scroller',
  props: {
    sights: Array
  },
  watch: {
    sights () {
      this.$nextTick(() => {
        this.scroller.refresh()
      })
    }
  },
  mounted () {
    this.scroller = new BScroll(this.$refs.scroller)
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .item
    display: flex
    padding: .24rem
    border-bottom:1px solid #f0f0f0
    .item-img
     width: 1.4rem
     height: 1.4rem
     margin-right: .2rem
    .item-content
      flex: 1
      .item-title
        margin: .04rem 0 .1rem 0
        font-size: .3rem
        .slip
          color: $fontColor
      .item-desc
        margin-bottom: .1rem
        font-size: .28rem
        color: $lightFontColor
      .item-price
        font-size: .36rem
        color: $enlightFontColor
        .price-tag
          font-size: .24rem
        .price-start
          font-size: .24rem
          color: $lightFontColor
</style>
