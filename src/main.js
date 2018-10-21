// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App';
// 路由
import router from './router';
// 引入样式
import './styles/fixed.css';
import './styles/common.css';
// 底部tab组件
import tabBottom from '@/components/tabBottom';
// 内容组件
import tabContent from '@/components/tabContent';
// http
import {$get , $post, $put, $delete} from './common/http';
// vuex - store
import store from '@/store/index';
// 引入储存库
import * as localforage from 'localforage';
// 引入velocity动画库
import 'velocity-animate';

// 时间格式化过滤器，输入内容是number或者Date对象，输出是YYYY-MM-DD HH-MM-SS。使用：{{num | formatTime}}
Vue.filter('formatTime', function (value) {
  Date.prototype.Format = function (fmt) { 
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };

    if (/(y+)/.test(fmt)) 
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));

    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));

    return fmt;
  }

  // return new Date(value).Format("yyyy-MM-dd hh:mm:ss");
  return new Date(value).Format("yyyy-MM-dd");
});

// 自定义指令 - 钩子
Vue.directive('song', {
  bind: (el, binding) => { // 被绑定
    console.log('1 - bind', el, binding, binding.value);
  },
  inserted: (el, binding) => { // 绑定到节点
    console.log('2 - inserted', el, binding);
  },
  update: () => { // 组件更新
    console.log('3 - update');
  },
  componentUpdated: () => { // 组件更新完成
    console.log('4 - componentUpdated');
  },
  unbind: () => { // 解绑
    console.log('5 - unbind');
  }
});

// 自定义指令 - 函数
Vue.directive('lee', (el, binding) => {
  console.log(el); // 标签
  console.log(binding); // 输出的是一个对象obj
});

Vue.prototype.$get = $get;
Vue.prototype.$post = $post;
Vue.prototype.$put = $put;
Vue.prototype.$delete = $delete;

// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
// 不取消所有的日志和警告
// Vue.config.silent = false
// 务必在加载 Vue 之后，立即同步设置以下内容
// Vue.config.devtools = true
// // 错误信息
// Vue.config.errorHandler = function (err, vm, info) {
//   // handle error
//   // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
//   // 只在 2.2.0+ 可用
//
//   console.error('error:',info)
// }

// 须使 Vue 忽略在 Vue 之外的自定义元素 (e.g. 使用了 Web Components APIs)。
// 否则，它会假设你忘记注册全局组件或者拼错了组件名称，从而抛出一个关于 Unknown custom element 的警告。
// Vue.config.ignoredElements = [
//   'my-custom-web-component',
//   'another-web-component',
//   // 用一个 `RegExp` 忽略所有“ion-”开头的元素
//   // 仅在 2.5+ 支持
//   /^ion-/
// ]

// 设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪。
// 只适用于开发模式和支持 performance.mark API 的浏览器上。
// Vue.config.performance = true

// 配置localforage
localforage.config({
  driver      : localforage.LOCALSTORAGE,
  name        : 'myApp',
  version     : 1.0,
  size        : 6666666,
  storeName   : 'localAll'
});

// 生成全局的localforage
Vue.prototype.localforage = localforage;
// 注册全局组件 - 底部导航
Vue.component('tab-bottom', tabBottom);
// 注册全局组件 - 导航对应的内容
Vue.component('tab-content', tabContent);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
