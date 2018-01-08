<template>
  <div class="header">
    <div class="headerTop">
      <div class="top">
        <p>&nbsp;&nbsp;狗狗站&nbsp;|&nbsp;北京▼<input type="search" placeholder="  搜索商品和品牌"></p>
      </div>
      <div class="clearfix-messige">
        <img src="../../common/img/mydope.png" alt="">
      </div>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(menu,index) in home.menus" :key="index">
          <router-link to="1">{{menu.menu_name}}</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState(['home']),
    },
    mounted(){
      let scroll = new BScroll('.nav',{
        scrollX: true,
        click: true
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    width: 100%
    height:86px
    position fixed
    top 0
    left 0
    background: #fff
    z-index 10
  .header .headerTop
    width: 405px
    height: 51px
  .header .headerTop .top
    font:14px "微软雅黑"
    height:51px
    line-height: 51px
  .header .headerTop .top input
    margin-left: 10px
    width: 220px
    height:20px
    background-color: #e9e9e9;
    border-radius: 5px
    font-size: 14px
  .header .headerTop .top p
    display: block
    color: #898989
  .clearfix-messige
    position absolute
    top 5px
    left: 335px
    width 41px
    height: 41px
    margin-top 8px
    text-align center
   .clearfix-messige img
     display inline-block
     width 25px
     height: 25px
  .header .nav
    width: 100%;
    height:35px;
    border-bottom 1px solid #999
  .header .nav ul
    width: 525px
    height: 35px
  .header .nav li
    float left
    width: 75px
    height: 36px
    text-align center
    line-height 36px
  .header .nav a
    font-size 14px
  .active
    color: green
    width: 32px
    height:32px
    border-bottom: 2px green solid

</style>
