import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { Swipe, SwipeItem, Navbar, TabItem, IndexList, IndexSection} from 'mint-ui';

Vue.use(MintUI)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store
})

