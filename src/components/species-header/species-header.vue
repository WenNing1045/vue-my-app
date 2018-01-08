<template>
  <div class="navheadercontent">
    <div class="nav-content">
      <div class="nav">
        <mt-navbar>
          <mt-tab-item id="1">
            <router-link to="/species/nav">分类</router-link>
          </mt-tab-item>
          <mt-tab-item id="2">
            <router-link to="/species/brand">品牌</router-link>
          </mt-tab-item>
        </mt-navbar>
      </div>
      <div class="search-icon">
        <img src="../../common/img/search-ico.png" alt="">
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .navheadercontent
    z-index 1000000
    background: #fff
  .nav-content
    border-bottom 1px solid #E6E6E6
    position relative
  .nav
    width: 50%
    margin 0 auto
  .search-icon
    width: 14px
    height: 14px
    position absolute
    top:14px
    right 14px
    &>img
      width 100%
      height: 100%
  .active
    color: green
    width: 32px
    height:32px
    border-bottom: 2px green solid
</style>
