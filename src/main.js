import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入element ui样式  使用import导入后需要使用element ui  Vue.use(ElementUI)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

//重置样式 npm 引入 npm install --save normalize.css
import 'normalize.css/normalize.css'

//使用element
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
