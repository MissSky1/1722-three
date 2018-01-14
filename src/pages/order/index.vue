<template>
  <div class="body">
    <order-header @change="handleChange"></order-header>
    <div class="main">
      <order-tour class="tour" :index="number"></order-tour>
    </div>
    <order-foot :index="number"></order-foot>
  </div>
</template>

<script>
import OrderHeader from './header'
import OrderTour from './tour'
import OrderFoot from './foot'
export default {
  name: 'order',
  // 为什么在父组件里 这里必须写成函数？？？？？
  data () {
    return {
      number: 1
    }
  },
  components: {
    OrderHeader,
    OrderTour,
    OrderFoot
  },
  methods: {
    handleChange (index) {
      this.number = index
    }
  }
}
</script>

<style lang="stylus" scoped>
  .body
    width: 7.5rem
    height: 13.34rem
    background: #f5f5f5
    display: flex
    flex-direction: column
  .main
    display: block
    min-height: 7rem
    flex: 1
</style>