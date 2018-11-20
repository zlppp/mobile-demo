<template>
  <div>
    <ul class="nav-footer">
      <li>
        <router-link to="/news">
          <i class="el-icon-tickets"></i>
          <p>新闻</p>
        </router-link>
      </li>
      <li>
        <router-link to="/answers">
          <i class="el-icon-edit-outline"></i>
          <p>答题</p>
        </router-link>
      </li>
      <li>
        <router-link to="/note">
          <i class="el-icon-bell"></i>
          <p>便签</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>

</script>
<style>
  .nav-footer {
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ddd;
    background: #f1f1f1;
  }
  .nav-footer li {
    float: left;
    width: 33.333%;
    text-align: center;
  }
  .nav-footer li i {
    margin-top: 5px;
    font-size: 20px;
  }
  .router-link-active {
    color: chocolate;
  }
</style>
