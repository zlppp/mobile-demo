<template>
  <div class="container">
    <home-header></home-header>
    <div class="content">
      <ul class="cont-ul">
        <list v-for="(item, index) in items"
              :key="index"
              :img="item.img"
              :title="item.title"
              :price="(item.price).toFixed(2)">
          
        </list>
      </ul>
    </div>
    <footer-paginate :total="total" @click="acceptPage"></footer-paginate>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import axios from 'axios'
  import HomeHeader from '../../components/goods/header'
  import NavFooter from '../../components/footer'
  import FooterPaginate from '../../components/goods/paginate'
  import List from '../../components/goods/list'
  
  export default {
    data() {
     return {
       items: [],
       total: 0, // 总页数
       page: 1 // 页数
     }
    },
    components: {
      HomeHeader,
      FooterPaginate,
      List,
      NavFooter
    },
    methods: {
      getList() {
        this.$indicator.open({
          spinnerType: 'fading-circle'
        })
        axios.get('https://www.easy-mock.com/mock/5bbf1eaf6b58010f13e25f9d/agent/goods', {
          params: { // 传参
            page: this.page
          }
        })
          .then(res => {
            this.$indicator.close()
            this.items = res.data.data
            this.total = res.data.total
          })
      },
      acceptPage(data) {
        this.page = data
        this.getList()
      }
    },
    mounted() {
      this.getList()
    }
    
  }
</script>
<style>
  body {
    background: #fff;
  }
  .container {
    width: 100%;
    margin: 0 auto;
  }
  .container {
    margin-bottom: 70px;
  }
  .cont-ul {
    padding-top: 0.5rem;
    background-color: #ccc;
  }
  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
