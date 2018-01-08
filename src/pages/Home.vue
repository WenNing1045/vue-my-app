<template>
  <div>
    <appHeader/>
    <category/>
    <goods/>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import appHeader from '../components/header/header.vue'
  import category from '../components/category/category.vue'
  import goods from '../components/goods/goods.vue'
  export default{
    components:{
      appHeader,
      category,
      goods
    },
    mounted(){

      this.$store.dispatch('requestHome',() => {
        // 在状态更新之后执行
      })
      this.$store.dispatch('requestGoods',() => {
        // 在状态更新之后执行
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
