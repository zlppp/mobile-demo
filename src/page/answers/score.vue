<template>
  <div class="content">
    <p class="title"><span class="score">{{ count }}</span> 分</p>
    <img :src="scoreImg[getScoreTipes(this.count)]" class="img-tips">
    <p class="msg">{{ message[getScoreTipes(this.count)] }}</p>
    
    <router-link to="answers" class="btn">再答一次</router-link>
    <router-link to="/" class="btn btn-home">返回首页</router-link>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import NavFooter from '../../components/footer'
  import { mapState } from 'vuex'
  
  export default {
    data() {
      return {
        message: ['棒！', '再接再励，继续努力！', '差！'],
        scoreImg:[
          require('./../../assets/images/img_happy.png'),
          require('./../../assets/images/img_express.png'),
          require('./../../assets/images/img_sad.png'),
        ],
        tab: 0,
      }
    },
    components: {
      NavFooter
    },
    computed: {
      ...mapState([
        'count'
      ]),
    },
    methods: {
      // 分数信息
      getScoreTipes: n => {
        switch (n) {
          case 100: return '0';
          case 0: return '2';
          default: return '1'
        }
      }
    }
  }
</script>
<style scoped>
  .content {
    text-align: center;
  }
  .title {
    margin: 30px 0;
    font-size: 20px;
  }
  .score {
    color: chocolate;
    font-weight: bold;
    font-size: 38px;
  }
  .img-tips {
    width: 100px;
    margin-bottom: 35px;
  }
  .msg {
    margin-bottom: 40px;
    font-size: 20px;
  }
  .btn {
    display: block;
    width: 80%;
    height: 45px;
    margin: 15px auto;
    border-radius: 5px;
    line-height: 45px;
    background: chocolate;
    color: #fff;
    font-size: 18px;
  }
  .btn-home {
    border: 1px solid chocolate;
    color: chocolate;
    background: transparent;
  }
</style>
