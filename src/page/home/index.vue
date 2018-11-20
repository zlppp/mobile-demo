<template>
  <div>
    <div class="banner"></div>
    <ul class="home-nav">
      <li>
        <router-link to="/news">
          <i class="el-icon-tickets"></i>
          <p>新闻</p>
        </router-link>
      </li>
      <li>
        <router-link to="/answers">
          <i class="el-icon-time"></i>
          <p>我要答题</p>
        </router-link>
      </li>
      <li>
        <router-link to="/note">
          <i class="el-icon-document"></i>
          <p>我的便签</p>
        </router-link>
      </li>
      <li>
        <router-link to="/goods">
          <i class="el-icon-edit"></i>
          <p>新闻</p>
        </router-link>
      </li>
      <li>
        <router-link to="/goods">
          <i class="el-icon-edit"></i>
          <p>新闻</p>
        </router-link>
      </li>
      <li>
        <router-link to="/goods">
          <i class="el-icon-edit"></i>
          <p>新闻</p>
        </router-link>
      </li>
    </ul>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import NavFooter from '../../components/footer'
  
  export default {
    data() {
      return {
        navList: [
          {
            iconClass: '.icon-xinwen1',
            title: '新闻',
            path: '/goods'
          }
        ]
      }
    },
    components: {
      NavFooter
    }
  }
</script>
<style>
  .banner {
    width: 100%;
    height: 120px;
    margin-bottom: 20px;
    background: #666666;
  }
  .home-nav li{
    float:left;
    width: 33.33%;
    margin-bottom: 10px;
    text-align: center;
    font-size: 16px;
  }
  .el-icon-edit {
    margin: 8px 0;
    font-size: 24px;
  }
</style>
