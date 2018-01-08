<template>
  <div>
    <router-view></router-view>
    <ul class="food">
      <li v-if="$route.path.indexOf('home') !== -1">
        <router-link to="/home" class="icon1"></router-link>
      </li>
      <li v-else>
        <router-link to="/home" class="icon11"></router-link>
      </li>
      <li v-if="$route.path.indexOf('species') !== 1">
        <router-link to="/species" class="icon2"> </router-link>
      </li>
      <li v-else><router-link to="/species" class="icon22"></router-link></li>

      <li v-if="$route.path.indexOf('shopping') !== 1">
        <router-link to="/shopping" class="icon3"></router-link>
      </li>
      <li v-else><router-link to="/shopping" class="icon33"></router-link></li>

      <li v-if="$route.path.indexOf('personal') !== 1">
        <router-link to="/personal" class="icon4"></router-link>
      </li>
      <li v-else><router-link to="/personal" class="icon44"></router-link></li>
    </ul>
  </div>
</template>
<script>

  export default {
    components:{
    },
    data() {
      return {}
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .food
    width: 100%
    height: 42px
    position fixed
    bottom 0
    left 0
    background: #fff
  .food li
    float left
    width: 25%
    height: 42px
    border-top 1px #cec5c5 solid
  .food .icon1
    display block
    float left
    width: 50%
    height: 42px
    margin-left 15px
    background-image url("./common/img/img.png")
    background-position 6px 2px
    background-repeat no-repeat
    background-size 234px 163px
  .food .icon11
    display block
    float left
    width: 50%
    height: 42px
    margin-left 15px
    background-image url("./common/img/img.png")
    background-position -79px 2px
    background-repeat no-repeat
    background-size 234px 163px
  .food .icon2
    display block
    float left
    width: 50%
    height: 42px
    margin-left 15px
    background-image url("./common/img/img.png")
    background-position -85px -40px
    background-repeat no-repeat
    background-size 234px 163px
  .food .icon22
    display block
    float left
    width: 50%
    height: 42px
    margin-left 15px
    background-image url("./common/img/img.png")
    background-position 0px -40px
    background-repeat no-repeat
    background-size 234px 163px
  .food .icon3
    display block
    float left
    width: 50%
    height: 42px
    margin-left 15px
    background-image url("./common/img/img.png")
    background-position -85px -80px
    background-repeat no-repeat
    background-size 234px 163px
  .food .icon33
    display block
    float left
    width: 50%
    height: 42px
    margin-left 15px
    background-image url("./common/img/img.png")
    background-position 0px -80px
    background-repeat no-repeat
    background-size 234px 163px
  .food .icon4
    display block
    float left
    width: 50%
    height: 42px
    margin-left 15px
    background-image url("./common/img/img.png")
    background-position -80px -122px
    background-repeat no-repeat
    background-size 234px 163px
  .food .icon44
    display block
    float left
    width: 50%
    height: 42px
    margin-left 15px
    background-image url("./common/img/img.png")
    background-position 6px -122px
    background-repeat no-repeat
    background-size 234px 163px
</style>

