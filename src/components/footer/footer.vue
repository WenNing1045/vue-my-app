<template>
  <div>
    <ul class="foot">
      <li v-if="$route.path.indexOf('home')!== -1">
        <router-link to="home" class="icon1">1</router-link>
      </li>
      <li v-else><router-link to="/index" class="icon11">2</router-link></li>
      <li v-if="$route.path.indexOf('species')!== -1">
        <router-link to="species" class="icon2">3</router-link>
      </li>
      <li v-else><router-link to="/index" class="icon22"></router-link></li>
      <li v-if="$route.path.indexOf('shopping')!== -1">
        <router-link to="shopping" class="icon3"></router-link>
      </li>
      <li v-else><router-link to="/index" class="icon33"></router-link></li>
      <li v-if="$route.path.indexOf('personal')!== -1">
        <router-link to="personal" class="icon4"></router-link>
      </li>
      <li v-else><router-link to="/index" class="icon44"></router-link></li>
    </ul>


  </div>
</template>
<script>
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .foot
    width: 100%
    height: 46px
    background: #fff
  .food li
    float left
    width: 25%
    height: 46px
    border-top 1px #cec5c5 solid
  .food .icon1
    display block
    float left
    width: 50%
    height: 46px
    margin-left 15px
    background-image url("../../common/img/img.png")
    background-position 6px 2px
    background-repeat no-repeat
    background-size 608% 307%
  .food .icon11
    display block
    float left
    width: 50%
    height: 46px
    margin-left 15px
    background-image url("../../common/img/img.png")
    background-position -108px 2px
    background-repeat no-repeat
    background-size 608% 307%
  .food .icon2
    display block
    float left
    width: 50%
    height: 46px
    margin-left 15px
    background-image url("../../common/img/img.png")
    background-position -108px 41px
    background-repeat no-repeat
    background-size 608% 307%
  .food .icon22
    display block
    float left
    width: 50%
    height: 46px
    margin-left 15px
    background-image url("../../common/img/img.png")
    background-position 6px -41px
    background-repeat no-repeat
    background-size 608% 307%
  .food .icon3
    display block
    float left
    width: 50%
    height: 46px
    margin-left 15px
    background-image url("../../common/img/img.png")
    background-position -108px -84px
    background-repeat no-repeat
    background-size 608% 307%
  .food .icon33
    display block
    float left
    width: 50%
    height: 46px
    margin-left 15px
    background-image url("../../common/img/img.png")
    background-position 6px -84px
    background-repeat no-repeat
    background-size 608% 307%
  .food .icon4
    display block
    float left
    width: 50%
    height: 46px
    margin-left 15px
    background-image url("../../common/img/img.png")
    background-position -116px -126px
    background-repeat no-repeat
    background-size 608% 307%
  .food .icon44
    display block
    float left
    width: 50%
    height: 46px
    margin-left 15px
    background-image url("../../common/img/img.png")
    background-position -2px -126px
    background-repeat no-repeat
    background-size 608% 307%
</style>
