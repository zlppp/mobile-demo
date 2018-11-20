<template>
  <div class="content">
    <ul class="list">
      <li>
        <router-link to="noteList" class="item-color">
          <i class="el-icon-document"></i>
          <span>随手记</span>
          <span class="item-right">
            <span class="num">{{ num }}</span>
            <i class="el-icon-arrow-right"></i>
          </span>
        </router-link>
      </li>
      <li>
        <router-link to="edit" class="item-color">
          <i class="el-icon-error"></i>
          <span>删除的便签</span>
          <span class="item-right">
            <span class="num">0</span>
            <i class="el-icon-arrow-right"></i>
          </span>
        </router-link>
      </li>
    </ul>
    <note-header></note-header>
    <footer-nav></footer-nav>
  </div>
  
</template>
<script>
  import noteHeader from '../../components/note/header'
  import footerNav from '../../components/footer'
  import { mapGetters} from 'vuex'
  export default {
    data() {
      return {
        num: 0
      }
    },
    computed: {
      ...mapGetters([
        'isNoteList'
      ])
    },
    components: {
      noteHeader,
      footerNav
    },
    created() {
      this.num = this.isNoteList.length
    }
  }
</script>
<style scoped>
  .content {
    margin-top: 30px;
    padding: 0 15px;
  }
  .list li {
    width: 100%;
    margin-bottom: 15px;
    padding: 8px;
    border:1px solid chocolate;
    border-radius: 5px;
    line-height: 30px;
    font-size: 16px;
  }
  .item-color {
    display: block;
    color: chocolate;
  }
  .item-right {
    float: right;
  }
  
</style>
