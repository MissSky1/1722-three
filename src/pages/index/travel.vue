<template>
  <div>
      <div class="city-weekend">
        <p class="shove">周末去哪儿</p>
      </div>
      <div class="city-ful" v-for="item in travel" :key="item.id">
        <router-link to="/"><!-- 链接 -->
          <img class="item-img" v-lazy="item.imgUrl">
        </router-link>
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <div class="Long-Strip"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-travel',
  props: {
    travel: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .city-weekend
    width: 100%
    height: .8rem
    line-height: .8rem
    background: $longStrip
    .shove
      margin-left: .26rem
  .city-ful
    display: flex
    flex-direction: column
    .item-img
      width:100%
    .item-title
      overflow: hidden
      font-size: .28rem
      line-height: .48rem
      margin-left: .2rem
      padding-top: .06rem
      white-space: nowrap
      text-overflow: ellipsis
      color: $fontColor
    .item-desc
      font-size: .24rem
      line-height: .42rem
      margin-left: .2rem
      padding-bottom: .06rem
      white-space: nowrap
      text-overflow: ellipsis
      color: #616161;
    .Long-Strip
      width: 100%
      height: .1rem
      background: $longStrip
</style>
