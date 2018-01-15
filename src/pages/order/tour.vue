<template>
  <div>
    <div class="tour-info" v-if="show1">
      <p class="name">
        <span class="tour-name">游客1</span>
        <input class="tour-in" type="text" name="" placeholder="游客姓名">
        <span class="tour-icon iconfont">&#xe6e2;</span>
      </p>
      <p class="phone">
        <span>手机号</span>
        <span class="phone-186 iconfont">+86&#xe62e;</span>
        <input class="phone-num" type="text" name="" placeholder="请填写手机号">
      </p>
      <p class="id">
        <span>身份证</span>
        <input class="id-in" type="text" name="" placeholder="请输入正确的身份证号">
      </p>
    </div>
    
    <div class="tour-info" v-if="show2">
      <p class="name">
        <span class="tour-name">游客1</span>
        <input class="tour-in" type="text" name="" placeholder="游客姓名">
        <span class="tour-icon iconfont">&#xe6e2;</span>
      </p>
      <p class="id">
        <span>身份证</span>
        <input class="id-in" type="text" name="" placeholder="请输入正确的身份证号">
      </p>
    </div>

    <div class="tour-info" v-if="show3">
      <p class="name">
        <span class="tour-name">游客1</span>
        <input class="tour-in" type="text" name="" placeholder="游客姓名">
        <span class="tour-icon iconfont">&#xe6e2;</span>
      </p>
      <p class="id">
        <span>身份证</span>
        <input class="id-in" type="text" name="" placeholder="请输入正确的身份证号">
      </p>
    </div>

    <div class="tour-info" v-if="show4">
      <p class="name">
        <span class="tour-name">游客1</span>
        <input class="tour-in" type="text" name="" placeholder="游客姓名">
        <span class="tour-icon iconfont">&#xe6e2;</span>
      </p>
      <p class="id">
        <span>身份证</span>
        <input class="id-in" type="text" name="" placeholder="请输入正确的身份证号">
      </p>
    </div>

    <div class="tour-info" v-if="show5">
      <p class="name">
        <span class="tour-name">游客1</span>
        <input class="tour-in" type="text" name="" placeholder="游客姓名">
        <span class="tour-icon iconfont">&#xe6e2;</span>
      </p>
      <p class="id">
        <span>身份证</span>
        <input class="id-in" type="text" name="" placeholder="请输入正确的身份证号">
      </p>
    </div>

    <span class="kf">咨询电话</span>

    <div class="tour-block"></div>
   </div>

</template>
<script>
  export default {
    name: 'order-tour',
    props: {
      index: Number
    },
    data () {
      return {
        show1: true,
        show2: false,
        show3: false,
        show4: false,
        show5: false
      }
    },
    watch: {
      'index' () {
        if (this.index === 1) {
          this.show2 = false
          this.show3 = false
          this.show4 = false
          this.show5 = false
        }
        if (this.index === 2) {
          this.show2 = true
          this.show3 = false
          this.show4 = false
          this.show5 = false
        }
        if (this.index === 3) {
          this.show2 = true
          this.show3 = true
          this.show4 = false
          this.show5 = false
        }
        if (this.index === 4) {
          this.show2 = true
          this.show3 = true
          this.show4 = true
          this.show5 = false
        }
        if (this.index === 5) {
          this.show2 = true
          this.show3 = true
          this.show4 = true
          this.show5 = true
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl"
  .tour-info
    margin-top: .3rem
    background: #fff
    min-height: .5rem
    padding: .24rem
    p
      height: .8rem
      line-height: .8rem
    .name
      border-bottom: 1px solid #ccc
      .tour-name
        width: 1.6rem
        float: left
        color: #616161
        line-height: .5rem
        font-size: .3rem
      .tour-in
        border: none
        font-size: .34rem
      .tour-icon
        width: .4rem
        heihgt: .5rem
        float: right
        color: $bgColor
    .phone
      border-bottom: 1px solid #ccc
      .phone-186
        border: 1px solid #ccc
        width: .5rem
        padding: 0.1rem 0 .1rem .1rem
        clolr: #ccc
        margin-left: .6rem
        font-size: .28rem
      .phone-num
        border: none
        color: #ccc
        font-size: .34rem
    .id-in
      margin-left: .6rem
      font-size: .34rem
      color: #ccc
      border: none
  .kf
    margin-top: 1rem
    font-size: .26rem
    padding: 0 0 0 6rem
    color: $bgColor
  .tour-block
    height: 1rem
    width: 100%
</style>