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

  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';

  export default {
    name: "bookshelf",
    created(){
      // console.log('bookshelf', this.$store);
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
