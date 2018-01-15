<template>
  <div class="foot">
    <div class="book">
      <a href="javascript:;" class="book-left">上一页</a>
      <div class="book-center">1 / 19</div>
      <a href="javascript:;" class="book-right">下一页</a>
    </div>
    <p class="foot-text">去哪儿门票</p>
  </div>
</template>

<script>
  export default {
    name: 'tour-foot'
  }
</script>
  
<style lang="stylus" scoped>
  .foot
    position: relative
    width: 100%
    height: 1.2rem
    .book
      width: 100%
      height: .7rem
      .book-left
        float: left
        margin-left: 2rem
        display: block
        width:1.4rem
        height: .7rem
        line-height: .7rem
        border-radius: 10%
        background: #bdbdbd
        color: white
        text-align: center
      .book-center
        float: left
        text-align: center
        width:1.4rem
        height: .7rem
        line-height: .7rem
        color: black

      .book-right
        float: left
        text-align: center
        width:1.4rem
        height: .7rem
        line-height: .7rem
        color: black
        border: 1px solid #00afc7
    .foot-text
      position: absolute
      top: .8rem
      left: 3rem
      width: 100%
      height: .5rem
      line-height: .5rem
      color: #00afc7
</style>