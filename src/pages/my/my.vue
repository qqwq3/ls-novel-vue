<template>
  <div class="content">
    <div @click="onPress">我的</div>

    <div style="margin-top: 20px;">
      <div v-show="isLogin" v-on:click.stop="onPress">您好</div>
    </div>

    <div v-text="message"/>

    <div v-html="msgHtml"/>

    <div v-cloak>{{message}}</div>

    <div v-pre>{{message}}</div>

    <div v-once>{{message}}</div>

    <img v-bind:src="imgSrc" style="margin-top: 20px;max-width: 200px;"/>

  </div>
</template>

<script>
  export default {
    name: "my",
    beforeDestroy(){
      // console.log('组件卸载之前');
    },
    destroyed(){
      // console.log('组件卸载了');
    },
    data(){
      return {
        message: 'OK',
        isLogin: true,
        msgHtml: '<h3>你好，我是用vue标签v-html渲染出来的</h3>',
        imgSrc: 'http://liangxinghua.com/uploads/image/20180709/1531106987.png'
      }
    },
    methods: {
      onPress(){
        this.isLogin = !this.isLogin;
      }
    }
  }
</script>

<style scoped>
  .content{flex: 1;}
</style>
