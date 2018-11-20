<template>
  <div class="item-content">
    <span class="title">第0{{ itemId+1 }}题</span>
    
    <h2 class="item-name">{{ itemList[itemId].topic_name}}</h2>
    <el-radio-group v-for="(item, index) in itemList[itemId].topic_answer" :key="index" v-model="choosedScore">
      <el-radio-button name="item.topic_radio" :label="item.is_standard_answer" @click="">
        {{ item.answer_name }}
      </el-radio-button>
    </el-radio-group>
    
    <span v-if="itemId < 4" @click="nextItem()" class="btn-next">下一题</span>
    <router-link to="/score" v-else class="btn-next">最后一题了</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        choosedScore: 0, // 选中答案的分数
        itemId: 0, // 第几题
        itemList: [
          {
            "topic_name": "打发打发打发发的反而无人让我去二群个人根本个人服务而人防污染",
            "topic_radio": 'r1',
            "topic_answer": [
              {
                "answer_name": "答案aaaa",
                "is_standard_answer": 0
              },
              {
                "answer_name": "答案bbb",
                "is_standard_answer": 0
              },
              {
                "answer_name": "正确答案",
                "is_standard_answer": 20
              },
              {
                "answer_name": "答案dddd",
                "is_standard_answer": 10
              }
            ]
          },
          
          {
            "topic_name": "vfvdfvds发的撒发顺丰反而无人给我刚发的突然特热死人",
            "topic_radio": 'r2',
            "topic_answer": [
              {
                "answer_name": "踢踢踢",
                "is_standard_answer": 0
              },
              {
                "answer_name": "答案bbb",
                "is_standard_answer": 0
              },
              {
                "answer_name": "正确答案",
                "is_standard_answer": 20
              },
              {
                "answer_name": "答案dddd",
                "is_standard_answer": 10
              }
            ]
          },
          {
            "topic_name": "太热太热太热太热换个地方广东佛山刚发的广泛地",
            "topic_radio": 'r3',
            "topic_answer": [
              {
                "answer_name": "答案aaaa33333",
                "is_standard_answer": 0
              },
              {
                "answer_name": "答案bbb",
                "is_standard_answer": 0
              },
              {
                "answer_name": "正确答案",
                "is_standard_answer": 20
              },
              {
                "answer_name": "答案dddd",
                "is_standard_answer": 0
              }
            ]
          },
          {
            "topic_name": "儿童热瑞特人刚发的广泛地发",
            "topic_radio": 'r4',
            "topic_answer": [
              {
                "answer_name": "答案aaaa",
                "is_standard_answer": 0
              },
              {
                "answer_name": "答案bbb",
                "is_standard_answer": 0
              },
              {
                "answer_name": "正确答案",
                "is_standard_answer": 20
              },
              {
                "answer_name": "答案dddd",
                "is_standard_answer": 0
              }
            ]
          },
          {
            "topic_name": "题目五",
            "topic_radio": 'r5',
            "topic_answer": [
              {
                "answer_name": "答案aaaa",
                "is_standard_answer": 0
              },
              {
                "answer_name": "答案bbb",
                "is_standard_answer": 0
              },
              {
                "answer_name": "正确答案",
                "is_standard_answer": 20
              },
              {
                "answer_name": "答案dddd",
                "is_standard_answer": 0
              }
            ]
          }
        ]
      }
    },
    methods: {
      nextItem() {
        this.itemId++;
        this.$store.commit('addNum', this.choosedScore)
      }
    }
  }
</script>

<style scoped>
  .item-content {
    width: 85%;
    margin: 0 auto
  }
  
  .title {
    display: block;
    width: 150px;
    height: 40px;
    margin: 30px auto;
    border: 2px solid chocolate;
    border-radius: 5px;
    line-height: 36px;
    text-align: center;
    color: chocolate;
    font-size: 16px;
    font-weight: bold;
  }
  
  .select-item span {
    width: 80%;
    margin: 0 auto
  }
  
  .item-list {
    text-align: center;
  }
  
  .item-list li {
    margin-bottom: 15px;
  }
  
  .btn-next {
    display: table;
    width: 85%;
    height: 50px;
    margin: 50px auto;
    border-radius: 8px;
    line-height: 50px;
    text-align: center;
    background: chocolate;
    color: #fff;
    font-size: 16px;
  }
  
  .item-name {
    margin: 35px 0;
    color: #ababab;
    font-size: 16px;
    font-weight: normal;
  }
  
  .el-radio-group {
    width: 100%;
  }
  
  .el-radio-group label,
  .el-radio-group span {
    display: block;
    width: 100% !important;
    margin-bottom: 10px;
    text-align: center;
  }
</style>
