import Vue from 'vue'
import {
  RECEIVE_HOME,
  RECEIVE_GOODS,
  RECEIVE_SPECIES,
  RECEIVE_ITEM,
  RECEIVE_BRAND

} from './mutations-types'
export default {
  [RECEIVE_HOME](state,{home}){
    state.home = home
  },

  [RECEIVE_GOODS](state,{goods}){
    state.goods = goods
  },

  [RECEIVE_SPECIES](state,{species}){
    state.species = species
  },

  [RECEIVE_ITEM](state,{item}){
    state.item = item
  },

  [RECEIVE_BRAND](state,{brands}){
    state.brands = brands
  }
}

