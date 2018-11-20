<template>
  <div>
    <ul class="nav-footer">
      <li>
        <router-link to="/">
          <i class="el-icon-document"></i>
          <p>主页</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>

</script>
<style>
  .nav-footer {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    left: 0;
    background: #f1f1f1;
  }
  .nav-footer li {
    width: 50%;
    text-align: center;
  }
  .nav-footer li i {
    margin-top: 5px;
    font-size: 20px;
  }
</style>
