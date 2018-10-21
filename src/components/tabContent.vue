<template>
  <div class="container">
    <!-- <transition name="fade" mode="out-in">
      <router-view/>
    </transition> -->
    <transition name="slide">
      <router-view class="child-view"/>
    </transition>
    <!-- <transition
      name="showRect"
      @before-enter="handleBeforeEnter"
      @enter="handleEnter"
      @after-enter="handleAfterEnter"
      @before-leave="handleBeforeLeave"
      @leave="handleLeave"
      @after-leave="handleAfterLeave"
      :css="false"
    >
      <router-view/>
    </transition> -->
  </div>
</template>

<script>
export default {
  name: "tabContent",
  data(){
    return {}
  },
  methods: {
    handleBeforeEnter: function (el) {
        // el.style.opacity = 0;
        // console.log('方块显示动画即将执行');
    },
    handleEnter: function (el, done) {
        Velocity(el, 'stop');
        Velocity(el, {
            opacity: 1,
            translateX: 0
        }, {
            duration: 1000,
            easing: 'slideLeftIn',
            complete: done
        });
        // console.log('方块显示动画执行中...');
    },
    handleAfterEnter: function (el) {
        // console.log('方块显示动画结束');
    },
    handleBeforeLeave: function (el) {
        // console.log('方块隐藏动画即将执行');
    },
    handleLeave: function (el, done) {
        Velocity(el, 'stop');
        Velocity(el, {
            opacity: 0,
            translateX: 0
        }, {
            duration: 1000,
            easing: 'slideLeftIn',
            complete: done
        });
        // console.log('方块隐藏动画执行中...');
    },
    handleAfterLeave: function (el) {
        // console.log('方块隐藏动画结束');
    }
  },
};
</script>

<style scoped>
  /* 页面滑动效果样式 */
  .child-view { 
    width: 100%;
    height: 100%;
    transition: all .25s linear;
  } 
  .slide-enter, .slide-enter-to{
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  .slide-enter-active, .slide-leave-active{
    transform: translate3d(100%, 0, 0);
  }
  .slide-leave, .slide-leave-to{
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  /*进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除*/
  .fade-enter-active {
    transition: opacity 0.5s;
  }
  /*进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除*/
  .fade-enter {
    opacity: 0;
  }
  /*离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除*/
  .fade-leave {
    opacity: 1;
  }
  /*离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除*/
  .fade-leave-active {
    opacity: 0;
    transition: opacity 0.5s;
  }
</style>
