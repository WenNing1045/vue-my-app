<template>
  <div>
    <div class="pic">
      <mt-swipe :auto="2000" v-if="home.datas">
        <mt-swipe-item v-for="(img,index) in home.datas['0'].value" :key="index">
          <a :href="img.target.param">
            <img :src="img.image" alt="">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="category">
      <ul v-if="home.datas">
        <li v-for="(icon,index) in home.datas['2'].menus" :key="index">
          <a href=""><img :src="icon.image" alt=""></a>
        </li>
      </ul>
    </div>
    <pageLine></pageLine>
    <div class="discount">
      <a href=""><img src="../../common/img/discount.jpg" alt=""></a>
    </div>
    <div class="surprise-title">
      <img src="../../common/img/suprice.png" alt="">
      <p>距离本场结束</p>
      <span>{{goods.time}}</span>
      <a href=""><img src="../../common/img/more.jpg" alt=""></a>
    </div>
    <div class="goods" ref="goods">
      <ul>
        <li class="good" v-for="(good,index) in goods.goods" :key="index">
          <div v-if="good.image">
            <img :src="good.image.image" alt="">
            <span class="price">{{good.sale_price}}</span>
            <span class="oidPrice">{{good.little_price}}</span>
          </div>
        </li>
      </ul>
    </div>
    <pageLine></pageLine>
    <div class="currency-adcon">
      <ul v-if="home.datas">
        <li v-for="(content,index) in home.datas[7].content_images[0]">
          <a href="">
            <img :src="content.image" alt="">
          </a>
        </li>
      </ul>
    </div>
    <pageLine></pageLine>
    <div class="currency_ad">
      <div class="divimg">
        <a href="">
          <img src="../../common/img/sc2.jpg" alt="">
        </a>
      </div>
      <div class="divimg">
        <a href="">
          <img src="../../common/img/sc3.jpg" alt="">
        </a>
        <a href="">
          <img src="../../common/img/sc4.jpg" alt="">
        </a>
      </div>
    </div>
    <pageLine></pageLine>

  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import pageLine from '../line/line.vue'
  import {mapState} from 'vuex'
  export default{
    components:{
      pageLine
    },
    computed:{
      ...mapState(['home','goods'])
    },
    mounted(){
      let good = this.$refs.goods
      let scroll = new BScroll(good,{
        scrollX: true,
        click: true
      })
    },
    computed:{
      ...mapState(['home','goods'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .pic
    width 100%
    height 160px
    margin-top 86px
  .mint-swipe
    width 100%
  .mint-swipe img
    width 100%
  .category
    width 100%
    overflow hidden
  .category li
    float left
    width 20%
  .category img
    width 100%
  .discount
    width 100%
    height 120px
  .discount img
    width 100%
  .surprise-title
    height 24px
    line-height 24px
  .surprise-title img
    float left
    height 24px
  .surprise-title p
    float left
    font-size 13px
    margin-right 10px
  .surprise-title span
    float left
  .surprise-title a img
    float left
    width: 60px
    height: 55px
    margin-left 35px
  .goods
    position: relative
    width 100%
    height 145px
    overflow hidden
    text-align center
    margin-bottom 8px
  .goods ul
    /*display: flex*/
    /*justify-content space-around*/
    /*align-items center*/
    position: absolute
    top 0
    left 0
    white-space nowrap
    width 200%
    height: 100%
    font-size 0
    &>li
      display inline-block
      width: 98px
      height: 100%
  .goods img
    width 85px
    height: 85px
  .good
    float left
  .good span
    display block
  .good .price
    font-size 14px
    color red
    margin-top 15px
  .good .oidPrice
    font-size 14px
    color #999
    margin-top 6px
  .currency-adcon
    width 100%
    height 185px
  .currency-adcon img
    width 100%
  .currency_ad
    width 100%
    height 240px
    margin-bottom 15px
  .divimg
    width: 50%
    float left
  .divimg img
    width 100%
</style>
