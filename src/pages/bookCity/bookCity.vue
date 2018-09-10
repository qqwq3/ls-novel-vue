<template>
  <div class="content">

    <template v-for="(obj,key) in data">
      <div class="box" :v-index="key" @click.stop="onPress(obj,key)">
        <span>{{obj.author || ""}}</span>
      </div>
    </template>

    <div class="lisenter">
      {{msg}}
    </div>

    <div style="margin-top: 50px;">
      <input v-model.trim.lazy.number="message" placeholder="请输入内容..."/>
      <p>{{message}}</p>
    </div>

    <input v-model.trim="dsMessage"/>
    <keep-alive>
      <my-componet v-bind:my-describe="dsMessage"/>
    </keep-alive>

  </div>
</template>

<script>
  const customComponent = {
    props:{
      myDescribe:{
        type: String,
        default:function () {
          return '设置默认值';
        }
      }
    },
    template: '<div style="color: #F3916B;margin-top: 10px;">{{myDescribe}}</div>',
    // props:['myDescribe'],
    // data:function () {
    //   return {
    //     dsMessage: this.dsMessage
    //   };
    // }
  };

  export default {
    name: "bookCity",
    async created(){
      // let data = await this.$get('posts');
      // this.data = data;

      // console.log('bookcity', data);
    },
    data(){
      return {
        dsMessage:'这里是我自定义的局部组件',
        message: null,
        msg: '这里是书城',
        data: [],
      }
    },
    methods:{
      onPress(item, index){
        this.msg = item.author;
      }
    },
    components:{
      'my-componet': customComponent,
    }
  }
</script>

<style scoped>
  .content{
    flex: 1;
  }
  .box{
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
  }
  .box:active{
    background-color: #e5e5e5;
    color: aqua;
  }
  .lisenter{
    text-align: center;
    margin-top: 20px;
    color: red;
  }
</style>
