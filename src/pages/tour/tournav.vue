<template>
  <div class="nav">
    <div class="nav-top">
      <div class="nav-chuck numa" @click="handleClicka">全部分类</div>
      <div class="nav-chuck numb" @click="handleClickb">全部目的地</div>
      <div class="nav-chuck numc" @click="handleClickc">价格最低</div> 
    </div>
    <div class="nav-bottom" v-show="clicks">
      <div class="nav-bottom-lei" v-show="clicka">
        <div class="nav-dong nav-bottom-lei-left">
          <ul>
            <li class="tab">全部分类</li>
            <li class="tab">文化古迹</li>
            <li class="tab">交通</li>
            <li class="tab">温泉</li>
            <li class="tab">运动健身</li>
            <li class="tab">展馆</li>
            <li class="tab">城市观光</li>
            <li class="tab">自然风光</li>
            <li class="tab">游乐场</li>
            <li class="tab">公园</li>
            <li class="tab">餐饮</li>
          </ul>
        </div>
        <div class="nav-bottom-lei-right">
          <ul>
            
          </ul>
        </div>
      </div>
      <div class="nav-dong1 nav-bottom-mudi" v-show="clickb">
        <ul>
          <li class="mudi">全部目的地</li>
          <li class="mudi">北京</li>
          <li class="mudi">保定</li>
          <li class="mudi">唐山</li>
          <li class="mudi">张家口</li>
          <li class="mudi">承德</li>
          <li class="mudi">天津</li>
          <li class="mudi">赤峰</li>
        </ul>
      </div>
      <div class="nav-dong2 nav-bottom-jiage" v-show="clickc">
        <ul>
          <li class="jiage">推荐排序</li>
          <li class="jiage">销量最高</li>
          <li class="jiage">价格最高</li>
          <li class="jiage">价格最低</li>
          <li class="jiage">热门评论</li>
          <li class="jiage">本周最热</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'tour-nav',
    data () {
      return {
        clicks: false,
        clicka: false,
        clickb: false,
        clickc: false
      }
    },
    mounted () {
      this.scroll1 = new BScroll('.nav-dong')
      this.scroll2 = new BScroll('.nav-dong1')
      this.scroll3 = new BScroll('.nav-dong2')
    },
    methods: {
      handleClicka: function () {
        this.clicks = true
        this.clicka = true
        this.clickb = false
        this.clickc = false
      },
      handleClickb: function () {
        this.clicks = true
        this.clicka = false
        this.clickb = true
        this.clickc = false
      },
      handleClickc: function () {
        this.clicks = true
        this.clicka = false
        this.clickb = false
        this.clickc = true
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .nav
    width: 100%
    height: 100%
    position: relative
    .nav-top
      display: flex
      width: 100%
      height: .8rem
      line-height: .8rem
      text-align: center
      border-bottom: .02rem solid #ccc
      .nav-chuck
        flex: 1
      .numa
        position: relative
        border-right: .02rem solid #ccc
        &:before
          position: absolute
          top: .35rem
          right: .2rem
          content:"\0020"
          width: 0
          height: 0
          border-left: .1rem solid transparent;
          border-right: .1rem solid transparent;
          border-top: .1rem solid black;
      .numb
        position: relative
        border-right: .02rem solid #ccc
        &:before
          position: absolute
          top: .35rem
          right: .2rem
          content:"\0020"
          width: 0
          height: 0
          border-left: .1rem solid transparent;
          border-right: .1rem solid transparent;
          border-top: .1rem solid black;
      .numc
        position: relative
        &:before
          position: absolute
          top: .35rem
          right: .2rem
          content:"\0020"
          width: 0
          height: 0
          border-left: .1rem solid transparent;
          border-right: .1rem solid transparent;
          border-top: .1rem solid black;
    .nav-bottom
      position: absolute
      top: .8rem
      left: 0
      z-index: 3
      width: 100%
      height: 100%
      background: rgba(96,96,96,.8)
      .nav-bottom-lei
        width: 100%
        height: 4rem
        z-index: 4
        .nav-bottom-lei-left
          overflow: hidden
          float: left
          width: 50%
          height: 4rem
          background: white
          .tab
            width: 100%
            height: .8rem
            line-height: .8rem
            border-bottom: .01rem solid black
            color: #212121
            padding-left: .4rem
            background: white
        .nav-bottom-lei-right
          float: left
          width: 50%
          height: 4rem
          background: #ccc
      .nav-bottom-mudi
        overflow: hidden
        z-index: 4
        width: 100%
        height: 4rem
        background: white
        .mudi
          width: 100%
          height: .8rem
          line-height: .8rem
          border-bottom: .01rem solid black
          color: #212121
          text-align: center
          background: white
      .nav-bottom-jiage
        overflow: hidden
        z-index: 4
        width: 100%
        height: 4rem
        background: white
        .jiage
          width: 100%
          height: .8rem
          line-height: .8rem
          border-bottom: .01rem solid black
          color: #212121
          text-align: center
          background: white
</style>