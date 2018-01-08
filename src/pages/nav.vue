<template>
  <div>
    <div class="tab1">
      <ul class="tab_list" ref="tab_list">
        <li class="ftc" v-for="(cate,index) in species" :key="index" :dataId="cate.cateid" @click="getItem">
          {{cate.name}}
        </li>
      </ul>
    </div>
    <div class="tab2">
      <ul>
        <li>
          <div class="goods_title" v-if="item[0]">
            <span>{{item[0].title}}</span>
          </div>
          <ul class="goods_list" v-if="item[0]">
            <li v-for="(list,index) in item[0].list" :key="index">
              <img :src="list.photo" alt="">
              <span>{{list.name}}</span>
            </li>
          </ul>
        </li>
        <!--热门-->
        <li>
          <div class="hot_title" v-if="item[1]">
            <span>{{item[1].title}}</span>
          </div>

          <ul class="hot_list" v-if="item[1]">
            <li v-for="(list,index) in item[1].list" :key="index">
              <div>
                <img :src="list.logo" alt="">
              </div>
              <p class="hot-name">{{list.name}}</p>
            </li>
          </ul>
        </li>
      </ul>



    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    mounted(){
      //页面加载完毕，更新第一个里的class值
      let tab_list = this.$refs.tab_list
      let li = tab_list.getElementsByTagName('li')[0]
      li.className('li')


      //页面加载完毕，设置右边li的滑动效果

      //定义一个对象，用于请求ajax的参数
      let obj = {
        do:'getChildren',
        pet_type:'dog',
        owner:'88888'
      }
      //获取所有li的数据
      this.$store.dispatch('requestSpecies',() => {
        // 在状态更新之后执行
        //页面加载完毕，设置左边li的滑动效果
        let scroll = new BScroll('.tab1',{
          scrollX: true,
          click: true
        })
      })
      //获取所有li对应的数据
      this.$store.dispatch('requestItem',obj,()=>{
        //页面加载完毕，设置右边li的滑动效果
        let scroll = new BScroll('.tab2',{
          scrollX: true,
          click: true
        })
      })
    },
    computed:{
      ...mapState(['species','item'])
    },
    methods:{
      //定义点击事件，为每个li发送请求
      getItem(event){
        //给点击的li添加新的class样式
        let tab_list = this.$refs.tab_list
        let lis = tab_list.getElementsByTagName('li')
        for (var i = 0; i < lis.length; i++) {
          lis[i].className = 'ftc'
        }
        event.target.className = 'li'
        //相对于不同的li参数不同，发送ajax请求
        let dataId = event.target.getAttribute('dataId')
        let obj = {
          do:'getChildren',
          pet_type:'dog',
          owner:dataId
        }
        this.$store.dispatch('requestItem',obj,()=>{ //携带obj参数

        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .tab1
    width: 100%
    /*height 500px*/
    background: #F3F4F5
    position absolute
    top:47px
    left: 0
    bottom 43px
    overflow hidden
  .tab_list
    position absolute
    top 0
    left 0
    white-space nowrap
  .ftc
    width 70px
    height: 50px
    font-size 13px
    text-align center
    line-height 50px
    border 1px solid #F3F4F5
    background: #fff;
  .li
    width 70px
    height: 50px
    font-size 13px
    text-align center
    line-height 50px
    color red
    background: #F3F4F5
  .tab2
    width: 300px
    position absolute
    top: 47px
    left: 75px
    bottom: 43px
    background: #fff
    overflow: hidden;

  .goods_title
    width 100%
    height 50px
    line-height: 50px;
    font-size 12px
    color #999
    margin-left 15px
  .goods_list
    overflow hidden
  .goods_list li
    float left
    width 33.33333%
    height: 117px
    text-align center
  .goods_list img
    width 100%
  .goods_list span
    font-size 12px
  .hot_title
    width 100%
    height 50px
    line-height: 50px;
    font-size 12px
    color #999
    margin-left 15px
    margin-top 25px
  .hot_list
    width 100%
    overflow hidden
    text-align center
  .hot_list li
    float left
    width 50%
  .hot_list li div
    box-sizing border-box
    width 135px
    height: 67px
    border 1px solid #cec5c5
    padding 11px 0
    margin-left 8px
  .hot_list li img
    width 80px
    height: 45px
  .hot-name
    height: 20px;
    overflow: hidden;
    margin-top 2px
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size 13px
    color #333


</style>
