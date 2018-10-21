<template>
  <div class="content bg-color-white">
    <div>
      书架首页
    </div>

    <div style="margin-top: 50px;">
      <button v-on:click.stop="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <div style="margin-top: 20px;">
      <h2>{{count}}</h2>
      <button @click.stop="clickAdd">点我改变数量</button>
      <!--<button @click.stop="ADD">点我改变数量</button>-->
    </div>

    <div style="margin-top: 20px;">
      <h2>{{name}}</h2>
      <button @click="resetClick">点我改变名字</button>
      <!--<button @click="RESET">点我改变名字</button>-->
    </div>

    <!-- 点击进入书架详情页 -->
    <div @click="onPressMe" class="click-details">点击我进入书架详情</div>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';

  export default {
    name: "bookshelf",
    created(){
      // console.log('bookshelf', this.$store);
    },
    mounted(){

    },
    data(){
      return {
        message: '',
        show: true
      }
    },
    computed:{
      count(){
        return this.$store.state.count;
      },
      name(){
        return this.$store.state.name;
      }
    },
    // 方式一
    methods:{
      // 点击我进入详情
      onPressMe(){
        let router = this.$router;
        return router.push({name: 'bookshelfDetails'});
      },
      clickAdd(){
        this.$store.dispatch('add', 1);
      },
      resetClick(){
        this.$store.dispatch('reset', 'abc');
      }
    }
    // 方式二
    // methods: mapMutations(['ADD','RESET'])
  }
</script>

<style scoped>
  .click-details{
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    background: #e5e5e5;
    margin-top: 40px;
    margin-left: 40px;
  }
  .content {
    flex: 1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
