<template>
  <div class="brand">
    <ul class="brands_list">
      <li v-for="(brand,index) in brands" :key="index">
       <div class="brand_title">
         <p>—— {{brand.title}} ——</p>
       </div>
       <ul class="brand_list">
         <li v-for="(list,index) in brand.list" :key="index">
           <div>
             <img :src="list.logo" alt="">
           </div>
           <p class="brand-name">{{list.name}}</p>
           <p class="brand_county">{{list.address}}</p>
         </li>
       </ul>
     </li>
    </ul>
    <div class="all" @click="all">
        全部
    </div>
    <transition name="bounce">
      <div class="all-brand" ref="all-brand" v-show="isShow">
        <div class="back"  @click="all">
          返回
        </div>
        <mt-index-list>
          <mt-index-section index="A" v-for="(brand,index) in brands" :key="index">
            <mt-cell title="" v-for="(list,index) in brand.list" :key="index">
              <div class="all-list">
                <img :src="list.logo" alt="">
                <span>{{list.name}}</span>
                <span>{{list.address}}</span>
              </div>
            </mt-cell>
          </mt-index-section>
        </mt-index-list>
      </div>
    </transition>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return{
        isShow : false
      }
    },
    mounted(){
      this.$store.dispatch('requestBrand',()=>{
        let scroll = new BScroll('.brand',{
          scrollX: true,
          click: true
        })
      })
    },
    computed:{
      ...mapState(['brands'])
    },
    methods:{
      all(){
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .brand
    width 100%
    position absolute
    top: 47px
    bottom: 42px
  .brands_list
    width 100%
    text-align center
  .brands_list li
    width 100%
  .brand_title
    height 55px
    text-align center
    line-height 55px
    color #999
    font-size 13px
  .brand_list
    width 100%
    overflow hidden
  .brand_list li
    float left
    width 112px
    margin 5px
  .brand_list li div
    box-sizing border-box
    width 112px
    height: 62px
    border 1px solid #cec5c5
    padding 11px 0
  .brand_list li img
    width 80px
    height: 40px
  .brand-name
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size 13px
    color #333
  .brand_county
    font-size 12px
    color #999
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  .all
    width: 45px
    height: 45px
    background: #999
    position fixed
    bottom 65px
    right: 15px
    border-radius 50%
    text-align center
    line-height 45px
    z-index 100
    color #fff
    font-size 13px
  .all-brand
    position: absolute
    top:0
    left:0
    bottom 0
    right:0
    z-index 500
  .all-list
    width 100%
    height: 75px
    line-height 75px
  .all-list img
    width 87px
    height: 40px
  .back
    width 47px
    height: 37px
    position fixed
    top 5px
    left 5px
    line-height 37px
    padding-left 15px
    background: #999
    border-radius 10px

  .bounce-enter-active
    animation: bounce-in .5s
    transition: opacity .5s
  .bounce-leave-active
    animation: bounce-in .5s reverse
    opacity: 0 .5s
  @keyframes bounce-in
    0%
      transform: scale(0)
    50%
      transform: scale(1.5)
    100%
      transform: scale(1)


</style>
