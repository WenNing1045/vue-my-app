import {
  requestHome,
  requestGoods,
  requestSpecies,
  requestItem,
  requestBrand
} from '../api'
import {
  RECEIVE_HOME,
  RECEIVE_GOODS,
  RECEIVE_SPECIES,
  RECEIVE_ITEM,
  RECEIVE_BRAND
} from './mutations-types'

export default {
  //获取首页信息
  async requestHome({commit},obj, cb){
    const result = await requestHome(obj)
    const home = result
    commit(RECEIVE_HOME, {home})
    // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
    cb && cb()
  },

  //获取首页商品折扣信息
  async requestGoods({commit}, cb){
    const result = await requestGoods()
    const goods = result.data['3']
    commit(RECEIVE_GOODS, {goods})
    // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
    cb && cb()
  },

  //获取分类页面的选项
  async requestSpecies({commit},cb){
    const result = await requestSpecies()
    const species = result.categorys
    commit(RECEIVE_SPECIES, {species})
    // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
    cb && cb()
  },

  //获取分类页面的数据
  async requestItem({commit},obj, cb){
    const result = await requestItem(obj)
    const item = result.cate_list
    commit(RECEIVE_ITEM, {item})
    // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
    cb && cb()
  },

  //获取分类页面的品牌内容
  async requestBrand({commit},cb){
    const result = await requestBrand()
    const brands = result.brand
    commit(RECEIVE_BRAND,{brands})
    cb && cb()
  }
}
