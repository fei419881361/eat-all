import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import config from './static/config.js'
import routers from './router.js'
import App from './App.vue'
// import Login from './Login.vue'
import vueresource from 'vue-resource'
import VueRouter from 'vue-router'
import quillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'
import 'quill/dist/quill.snow.css'

Vue.config.productionTip = false
Vue.use(quillEditor);
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(vueresource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

const store = new Vuex.Store({
  state: {
    count:0,
    token:null,
    baseUrl: config.config.baseUrl
  }
  
})
new Vue({
  render: h => h(App),
  store: store,
  router
}).$mount('#app')

