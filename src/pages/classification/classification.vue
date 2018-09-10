<template>
  <div class="content">
    <p>分类</p>
    <!--<p v-pre> : 加了v-pre就是直接输出vue原始的属性值-->
    <p>
      获取全局的count值：{{count}}
    </p>
    <p>
      <!--获取全局的name值：{{$store.state.name}}-->
      获取全局的name值：{{name}}
    </p>

    <div>
      过滤：{{filterMsg | filterA}}
    </div>

    <div style="margin-top: 30px;"><input v-model="question"></div>

    <div style="margin-top: 30px;">数字： {{counts}}</div>

    <my-single-slot>
      <span>这里是单个slot</span>
    </my-single-slot>

    <my-name-slot>
      <div slot="first" v-text="'first----111111'"/>
      <div slot="second">second------22222</div>
    </my-name-slot>

    <tb-list :data="data">
      <template slot-scope="scope">
        <p>索引：{{JSON.stringify(scope)}}</p>
        <p>索引：{{scope.$index}}</p>
        <p>姓名:{{scope.row.name}}</p>
        <p>年龄: {{scope.row.age}}</p>
        <p>性别: {{scope.row.sex}}</p>
      </template>
    </tb-list>

  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex';

  // 额外临时加入时，用于显示日志
  var addLog={
    updated: function(){
      console.log("数据放生变化,变化成"+this.count+".");
    }
  }

  export default {
    name: "classification",
    data(){
      return {
        filterMsg: 'abc',
        question: '',
        counts: 100,
        data:[
          {
            name: 'kongzhi1',
            age: '29',
            sex: 'man'
          }
        ]
      }
    },
    components:{
      // 单个插槽
      'my-single-slot':{
        template: `<button><slot/></button>`
      },
      // 具名插槽
      'my-name-slot':{
        template:
          `<div>
            <p style="margin-top: 10px;">这里是具名插槽</p>
            <slot name="first"></slot>
            <slot name="second"></slot>
          </div>`
      },
      // 作用域插槽
      'tb-list':{
        template:
          `
            <ul style="margin-top: 50px;">
              <li v-for="(item, key) in data">
                <slot :row="item" :$index="key"></slot>
              </li>
            </ul>
          `,
        props:['data']
      }
    },
    methods:{

    },
    // 过滤器，通常格式化字符，使用传值
    filters:{
      filterA: function (value) {
        return value.toUpperCase();
      }
    },
    created(){
      // console.log('classification', this.$store.state.count);
    },
    // 方式一
    // computed:{
    //   count:function(){
    //     return this.$store.state.count;
    //   },
    //   name:function () {
    //     return this.$store.state.name;
    //   }
    // }

    // 方式二
    // computed:mapState({
    //   count: state => state.count,
    //   name: state => state.name
    // })

    // 方式三
    // computed: mapState(['count','name'])

    // 方式四
    // computed: mapState({
    //   count: 'count',
    //   name: 'name'
    // })

    // 方式五
    computed: {
      ...mapGetters(['count','name'])
    },
    // data属性监听器, 作用v-model
    watch: {
      question(newVal, oldVal) {
        console.log('new: %s, old: %s', newVal, oldVal);
      }
    },
    // 混入，作用：减少代码污染、减少代码量、实现代码重用
    mixins: [addLog],
    // 扩展
    extends: {
      created: function(){
        console.log("我是被扩展出来的");
      }
    }
  }
</script>

<style scoped>
  .content{flex: 1;}
</style>
