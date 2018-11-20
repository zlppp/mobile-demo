<template>
  <div class="detail">
    <home-header></home-header>
    <p class="site-title">树懒果园 泰国进口大金煌芒果</p>
    <p class="site-cont">5斤装，约2-4个果，大！！！甜！！！</p>
  </div>
</template>
<script>
  import HomeHeader from '../../components/goods/header'
  
  export default {
    data() {
      return {
      
      }
    },
    components: {
      HomeHeader,
    }
  }
</script>
<style>
  .detail {
    padding: 0.25rem;
    font-size: 12px;
  }
  .detail > img {
    display: block;
    width: 80%;
    margin:  0 auto 0.5rem;
  }
  .detail > p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }
  .detail > p.site-title {
    color: #ff8000;
  }
  .detail > p.site-cont {
    color: #666;
    font-size: 0.9rem;
  }
</style>
