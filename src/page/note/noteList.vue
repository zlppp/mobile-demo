<template>
  <div class="content">
    <mt-header title="我的便签" v-show="isHeader">
      <router-link to="/note" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click="searchInput">搜索</mt-button>
    </mt-header>
    <mt-search
      v-model="searchVal"
      cancel-text="取消"
      placeholder="搜索" v-show="isSearch">
    </mt-search>
    <ul class="noteList" v-if="isNoteList.length > 0">
      <!-- 循环getters过滤的列表 content不为空的列表 -->
      <li v-for="item in isNoteList"
          @click="noteCont(item.content)"
          @mousedown="touchstart(item)"
          @mouseup="touchend(item)"
          @touchstart="loopstart(item)"
          @touchend="clearLoop">
        
          <h4 class="time">
            {{ item.time }}
            <el-checkbox v-model="item.none" v-show="isCheck"></el-checkbox>
            {{ item.none }}
          </h4>
          <p>{{ item.content }}</p>
        
      </li>
    </ul>
    <div v-else class="none-note">
      <i class="el-icon-edit-outline"></i>
      没有便签，右下角添加 :)
    </div>
    <tool-btn  @add-btn="addNote" @del-btn="delNote"></tool-btn>
  </div>
</template>
<script>
  import {mapState, mapGetters} from 'vuex'
  import ToolBtn from '../../components/note/toolBtn'
  
  export default {
    data() {
      return {
        searchVal: '',
        timeOutEvent: 0,
        isSearch: false,
        isHeader: true
      }
    },
    computed: {
      ...mapState([
        'isCheck'
      ]),
      ...mapGetters([
        'isNoteList',
        'newSearch'
      ]),
    },
    components: {
      ToolBtn,
    },
    props: ['isShow'],
    methods: {
      delNote() {
        this.$messagebox.confirm('确定删除便签吗？','').then(() => {
          this.$store.dispatch('deleteNote')
          this.$store.state.isCheck = false
          this.$toast('已删除，可在回收站复原')
        },() => {
        })
      },
      searchInput() {
        this.isSearch = true
        this.isHeader = false
      },
      search() {
        this.$store.state.search = this.searchVal
      },
      noteCont(note) {
        this.$store.dispatch("editNote", note)
        !this.isCheck ? this.$router.push({path: '/edit'}) : ''
      },
      addNote() {
        this.$store.dispatch('newNote')
        this.$router.push({path: '/edit'})
      },
      // 长按开始
      touchstart(item) {
        let _this = this
        this.timeOutEvent = setTimeout(function(){
          _this.longPress(item)
        },500) // 这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
        return false
      },
      // 放开
      touchend(item) {
        clearTimeout(this.timeOutEvent) // 清除定时器
        if(this.timeOutEvent!==0){
          //这里写要执行的内容（尤如onclick事件）
          
        }
        return false;
      },
      longPress(note){
        console.log(11111)
      },
      //手按住开始，模拟长按事件
      loopstart(note){
        var _this = this;
        clearInterval(this.Loop);
        this.Loop = setTimeout(function(){
          console.log(333)
          _this.$store.state.isCheck = true
          // _this.$store.dispatch('toggleNote',note);
        },500);
      },
      //手放开结束，模拟长按事件
      clearLoop(){
        clearTimeout(this.Loop);
      }
    },
    watch: {
      checkArr() {
      
      }
    }
    
  }
</script>
<style scoped>
  .content {
  
  }
  
  .el-input-group {
    margin: 8px 0 15px;
  }
  
  .noteList li {
    overflow: hidden;
    width: 48.7%;
    height: 90px;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-shadow: 0 0 4px #ccc;
    line-height: 1.45;
  }
  
  .noteList li:nth-child(odd) {
    float: left
  }
  
  .noteList li:nth-child(even) {
    float: right
  }
  .noteList {
    width: 90%;
    margin: 0 auto;
  }
  .time {
    font-size: 12px;
    font-weight: normal;
  }
  
  .none-note {
    margin-top: 40%;
    text-align: center;
    color: #bbb;
  }
  .mint-search {
    height: auto;
  }
</style>
