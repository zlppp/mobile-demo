<template>
  <div>
    <div class="edit-header">
      <span class="time">
        <router-link to="/noteList">
          <i class="el-icon-arrow-left"></i>
        </router-link>
        {{ time }}
      </span>
      <span class="add" @click="editNote" v-show="isShow">完成</span>
    </div>
    <textarea class="content" v-model="cont" placeholder="请输入标签内容"></textarea>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  
  export default {
    data() {
      return {
        noteList: '',
        cont: '',
        time: '', // 当前时间
        isShow: false, // 内容为空时，'完成'不显示，默认false
        editContent: '' // 编辑的内容
      }
    },
    methods: {
      editNote() {
        this.$router.push({path: '/noteList'})
        this.$store.dispatch("newNote", this.cont)
        this.editContent = this.activeNote
        console.log(this.note , 'd33333')
      },
      ...mapActions([
        'newNote'
      ])
    },
    computed: {
      ...mapState([
        'note',
        'activeNote'
      ]),
     
    },
    created() {
      // this.time = new Date.Format('yyyy-MM-dd')
      this.editContent = this.activeNote
      this.cont = this.activeNote
    },
    watch: {
      // 监听cont改变
      cont: function() {
        this.cont === this.editContent ? this.isShow = false : this.isShow = true
      }
    }
  }
</script>
<style scoped>
  .content {
    position: absolute;
    top: 30px;
    width: 100%;
    height: 100%;
    padding: 12px;
    border: none;
  }
  
  .add {
    float: right;
    color: chocolate;
    cursor: pointer;
  }
  .edit-header {
    height: 30px;
    padding: 0 12px;
    line-height: 30px;
  }
</style>
