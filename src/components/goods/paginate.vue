<template>
  <div class="footer">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
    <!--<ul class="footer-cont">-->
      <!--<li>1</li>-->
      <!--<li>2</li>-->
      <!--<li>3</li>-->
      <!--<li>4</li>-->
    <!--</ul>-->
  </div>
</template>
<script>
  export default {
    props: ['total'],
    methods: {
      handleCurrentChange(val) {
        this.$emit('click', val) // 使用$emit触发 传递参数
      }
    }
  }
</script>
<style scoped>
  .footer {
    height: 1.8rem;
    width: 100%;
    border-top: 2px solid #ccc;
    background-color: #fff;
  }
  .footer-cont li {
    float: left;
    width: 25%;
    height: 1.8rem;
    line-height: 1.8rem;
    font-size: 1.4rem;
    color: #ff8000;
    text-align: center;
  }
  .footer-cont li:active {
    background-color: #ccc;
  }
  .footer-cont:after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
