import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Element from 'element-ui'
import Mint from 'mint-ui'
import axios from 'axios'
import home from '../page/home/index.vue'
// 问答 vuex
import answers from '../page/answers/index.vue'
import Score from '../page/answers/score.vue'
// 新闻 axios
import News from '../page/news/index.vue'
import Details from '../page/news/detail.vue'
// 便签 vuex
import Note from '../page/note/index.vue'
import Edit from '../page/note/edit.vue'
import noteList from '../page/note/noteList.vue'

Vue.use(Router)
Vue.use(Vuex)
Vue.use(Element)
Vue.use(Mint)
Vue.prototype.$axios = axios
import 'swiper/dist/css/swiper.min.css'

export default new Router({
  routes: [
    {path: '/', component: home},
    {path: '/answers', component: answers},
    {path: '/score', component: Score},
    {path: '/news', component: News},
    {path: '/detail', component: Details},
    {path: '/note', component: Note},
    {path: '/edit', component: Edit},
    {path: '/noteList', component: noteList},
    
  ]
})
