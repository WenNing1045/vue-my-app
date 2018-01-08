<template>
  <div>
    <div class="custom_title">
      <div class="titmoudle" v-if="home.datas">
        <img :src="home.datas[11].value.left.img.image" alt="">
      </div>
      <div class="more" v-if="home.datas">
        <a href="">
          <img :src="home.datas[11].value.right.img.image" alt="">
        </a>
      </div>
    </div>
    <div class="fashion">
      <div>
        <ul class="cmVideoList">
          <li>
            <a href="">
              <div class="relative" v-if="home.datas">
                <img :src="home.datas[12].value[0].share_target.param.image">
              </div>
              <div class="textover" v-if="home.datas">
                <span>{{home.datas[12].value[0].title}}</span>
              </div>
              <div class="textover" v-if="home.datas">
                <img :src="home.datas[12].value[0].visit_img.image">
                <span>{{home.datas[12].value[0].visit}}</span>
                <span>|</span>
                <span>{{home.datas[12].value[0].time}}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="custom_title">
      <div class="titmoudle" v-if="home.datas">
        <img :src="home.datas[14].value.left.img.image" alt="">
      </div>
      <div class="more" v-if="home.datas">
        <a href="">
          <img :src="home.datas[14].value.right.img.image" alt="">
        </a>
      </div>
    </div>
    <div class="banner">
      <ul class="banner_list">
        <li>
          <a href=""  v-if="home.datas">
            <img :src="home.datas[15].value[0].image" alt="">
          </a>
          <pageLine></pageLine>
        </li>
        <li>
          <a href=""  v-if="home.datas">
            <img :src="home.datas[17].content_images[0][0].image" alt="">
          </a>
          <pageLine></pageLine>
        </li>
      </ul>
    </div>
    <div class="custom_title">
      <div class="titmoudle">
        <img src="../../common/img/tiyan.jpg" alt="">
      </div>
      <div class="more">
        <a href="">
          <img src="../../common/img/more.jpg" alt="">
        </a>
      </div>
    </div>
    <div class="custom_tite">
      <mt-swipe :auto="2000">
        <mt-swipe-item><img src="../../common/img/1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../common/img/2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../common/img/3.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    ...
    <div class="divimg2">
      <img src="../../common/img/Echong.jpg" alt="">
    </div>
    <div class="footer">
      <span>触屏版</span>
      <span>手机客户端</span>
      <span>关于我们</span>
      <span>联系我们</span>
      <p>© wap.epet.com 版权：重庆易宠科技有限公司</p>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import pageLine from '../../components/line/line.vue'
  export default{
    components:{
      pageLine
    },
    computed:{
      ...mapState(['home'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .custom_title
    width:100%;
    height: 87px
  .titmoudle
    float left
    width 50%
    height 73px
  .titmoudle img
    width 100%
    margin-left 15px
  .more
    float left
    width 50%
    height 73px
  .more img
    width: 30%
    margin-left 120px
  .fashion
    width 100%
    text-align center
  .cmVideoList
    margin-bottom 15px
  .relative img
    width 100%
  .textover img
    width: 10px
    height: 9px
  .textover span
    font-size 14px
    color #000
  .banner_list
    width 100%
  .banner
    width 100%
  .banner img
    width: 100%
  .custom_tite
    width: 100%
    height 160px
  .custom_tite img
    width 100%

  .divimg2
    width: 100%
  .divimg2 img
    width 100%
  .footer
    width 100%
    height: 86px
    text-align center
  .footer span
    display inline-block
    font-size 14px
    color #333
    margin 5px 5px
  .footer p
    margin: 5px 10px
    padding-bottom: 55px;
    font-size: 12px;
</style>
