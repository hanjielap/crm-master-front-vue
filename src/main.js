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


import iconPicker from 'e-icon-picker';
import "e-icon-picker/dist/symbol.js"; //基本彩色图标库
import 'e-icon-picker/dist/index.css'; // 基本样式，包含基本图标
import 'font-awesome/css/font-awesome.min.css'; //font-awesome 图标库
import 'element-ui/lib/theme-chalk/icon.css'; //element-ui 图标库
Vue.use(iconPicker, {FontAwesome: true, ElementUI: true, eIcon: true, eIconSymbol: true});


//使用element
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
