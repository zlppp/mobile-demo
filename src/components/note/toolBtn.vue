<template>
  <div>
    <div v-if="isCheck">
      <div class="toolBtn">
        <span class="el-icon-delete icon-delete" @click="delNote">
        </span>
      </div>
    </div>
    <div v-else>
      <i class="el-icon-circle-plus-outline icon-add"
         @click="addNote">
      </i>
    </div>
    
    
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      'isShow': false
    },
    computed: {
      ...mapState([
        'isCheck'
      ])
    },
    methods: {
      addNote() {
        this.$emit('add-btn')
      },
      delNote() {
        this.$emit('del-btn')
      }
    }
  }
</script>
<style scoped>
  .toolBtn {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 25px;
    border-top: 1px solid #ddd;
    line-height: 50px;
    text-align: center;
  }
  .icon-delete {
    padding: 5px;
    border: 1px solid #666;
    border-radius: 50%;
    font-size: 20px;
  }
  .icon-add {
    position: absolute;
    right: 20px;
    bottom: 10px;
    border-radius: 50%;
    color: chocolate;
    font-size: 40px;
    cursor: pointer;
    box-shadow: -3px -2px 10px chocolate;
  }
</style>
