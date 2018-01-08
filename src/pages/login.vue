<template>
  <div>
    <div class="header-person">
      <div class="header-top">
        <div class="left">
          <a href=""></a>
        </div>
        <div class="right">
          <router-link to="/personal/register" >注册</router-link>
        </div>
      </div>
      <div class="logo">
        <img src="../common/img/logo.png" alt="">
      </div>
      <div class="header-bottom">
        <span @click="checkForm1">手机登录</span>
        <span @click="checkForm2">手机动态密码登录</span>
      </div>
    </div>
    <div class="login normal-login" v-show="isShow">
      <div class="triangle_border up1">
        <span></span>
      </div>
      <form action="">
        <ul>
          <li>
            <img src="../common/img/ico3.png" alt="" class="login_icon">
            <input type="text" placeholder="手机号/邮箱/用户名">
          </li>
          <li>
            <img src="../common/img/ico4.png" alt="" class="login_icon">
            <input type="password" placeholder="输入密码">
          </li>
        </ul>
        <div class="forgotPassword">
          <a href="">忘记密码？</a>
        </div>
        <button>登&nbsp;&nbsp;&nbsp;录</button>
      </form>
    </div>
    <div class="login Mobile-login" v-show="!isShow">
      <div class="triangle_border up2">
        <span></span>
      </div>
      <form action="">
        <ul>
          <li>
            <img src="../common/img/ico1.png" alt="" class="login_icon">
            <input type="text" placeholder="已注册的手机号码">
          </li>
          <li>
            <img src="../common/img/ico4.png" alt="" class="login_icon">
            <input type="password" placeholder="请输入图片内容">
            <img src="../common/img/seccode.jpg" alt="" class="login_code">
          </li>
          <li>
            <img src="../common/img/ico4.png" alt="" class="login_icon">
            <input type="password" placeholder="动态密码">
            <a href="" class="dynamicPassword">获取动态密码</a>
          </li>
        </ul>
        <div class="forgotPassword">
          <a href="">忘记密码？</a>
        </div>
        <button>登&nbsp;&nbsp;&nbsp;录</button>
      </form>
    </div>
    <div class="footer">
      <div>合作网站登录</div>
      <ul class="footer_list">
        <li>
          <a href="">
            <img src="../common/img/login_ico2.png" alt="">
          </a>
        </li>
        <li>
          <a href="">
            <img src="../common/img/login_ico4.png" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        isShow:true
      }
    },
    methods:{
      checkForm1(){
        this.isShow = true
      },
      checkForm2(){
        if(this.isShow){
          this.isShow = !this.isShow
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header-person
    width 100%
    height 178px
    background-image url("../common/img/2ac7b0a4f0ab1e4a63819e0668d1cb39.png")
    background-repeat no-repeat
    background-size 100% 100%
    text-align center
    position relative
  .header-top
    width 100%
    height: 50px
    line-height 50px
  .left
    width 50%
    height: 50px
    float left
    background-image url("../common/img/personal-bico3.png")
    background-repeat no-repeat
    background-size 15px 22px
    background-position 13px 12px
  .left a
    float left
    height 50px
  .left img
    width: 22px
    height: 20px
  .right
    width 50%
    height: 50px
    float left
  .right a
    float right
    height 50px
    color #fff
    font-size 16px
    margin-right 15px
  .logo img
    width: 75px
    height: 48px
    margin-top 16px
  .header-bottom
    width: 100%
    height: 44px
    position: absolute
    left 0
    bottom 0
    line-height 44px
    background: rgba(255,255,255,0.3)
    &>span
      float left
      width: 50%
      height: 100%
      text-align center
      color #fff
      font-size 14px
  .footer
    width: 100%
    height 115px
    text-align center
    margin-top 110px
  .footer_list
    margin-top 25px
    width: 100%
    height: 58px
  .footer_list li
    width 96px
    height: 58px
    float left
    margin-left 25px
  .footer_list li img
    width: 58px
    height: 58px
  .footer div
    font-size 16px
    color #999
  .login
    box-sizing border-box
    width 100%
    height: 200px
    padding 0 25px
  .login li
    width: 333px
    height: 46px
    line-height 46px
    border-bottom 1px #d0d0d0 solid
  .login_icon
    width 17px
    height: 17px
  .login_code
    width: 85px
    height: 30px
    vertical-align middle
  .login li input
    outline:none
  .login li input::-webkit-input-placeholder
    color  #d0d0d0
    font-size 16px
  .login button
    width 330px
    height: 38px
    border 0
    background: #2EC975
    border-radius 8px
    margin 5px auto
    font-size 18px
    color #fff
  .forgotPassword
    width 100px
    height: 46px
    float right
    line-height 46px
  .dynamicPassword
    display inline
    border 1px solid red
    border-radius 3px
    padding 3px
    color red
    font-size 14px
  .triangle_border
    width 0px
    height 0
    border-width 0 10px 12px
    border-style solid
    border-color transparent transparent #fff/*透明 透明  灰*/
    margin 40px auto
  .up1
    position absolute
    top: 126px
    left: 82px
  .up2
    position absolute
    top 126px
    right 82px
</style>
