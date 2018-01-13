<template>
  <div  class="icons">
   <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pageList" :key="index">
        <div class="area-con">
          <div class="area-item" v-for="item in page" :key="item.id">
            <router-link to="/" class="slip"><!-- 链接 -->
              <img class="area-img" :src="item.imgUrl">
            </router-link>
            <router-link to="/" class="slip"><!-- 链接 -->
              <p class="area-desc">{{item.title}}</p>
            </router-link>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets mpw-nav-dots"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default{
    name: 'index-icons',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination'
        }
      }
    },
    computed: {
      pageList () {
        const pages = []
        this.list.forEach((value, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(value)
        })
        return pages
      }
    }
  }
</script>
<style lang="stylus" scoped>
@import "../../assets/stylus/varibles.styl";
.icons
  overflow: hidden
  height: 3.8rem
  .area-con
    display: flex
    flex-wrap: wrap
    .area-item
      width: 25%
      height: 1.9rem
      .slip
        color: $fontColor
        .area-img
          display: block
          margin: .3rem auto .2rem auto
          width: .7rem
          height: .7rem
        .area-desc
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
          line-height: .4rem
          text-align: center
          font-size: .07rem
.mpw-nav-dots
  bottom: -0.02rem
</style>