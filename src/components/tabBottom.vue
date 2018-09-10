<template>
  <div class="nav border-top">
    <div v-for="(o, index) in lists" class="nav-box" @click.stop="tabSelect(index)">
      <div class="nav-image-div">
        <img :src="currentIndex === index ? o.iconActive : o.iconDefault" class="nav-image"/>
      </div>
      <div :class="[tabTextClass, currentIndex === index ? 'font-color-orange' : 'font-color-666666']">
        {{ o.name }}
      </div>
    </div>
  </div>
</template>

<script>
  import {tab} from '@/common/icons';

  export default {
    name: "tabBottom",
    async created() {
      const currentIndex = await this.localforage.getItem('tabIndex');
      this.currentIndex = currentIndex;
    },
    data() {
      return {
        currentIndex: 0,
        tabTextClass: ['nav-text', 'font-size-0dot8rem'],
        lists: [
          {name: '书架', key: 0, iconDefault: tab.bookshelf.defaultIcon, iconActive: tab.bookshelf.activeIcon},
          {name: '书城', key: 1, iconDefault: tab.bookCity.defaultIcon, iconActive: tab.bookCity.activeIcon},
          {name: '排行', key: 2, iconDefault: tab.rankings.defaultIcon, iconActive: tab.rankings.activeIcon},
          {name: '分类', key: 3, iconDefault: tab.classification.defaultIcon, iconActive: tab.classification.activeIcon},
          {name: '我的', key: 4, iconDefault: tab.my.defaultIcon, iconActive: tab.my.activeIcon}
        ]
      }
    },
    methods: {
      tabSelect(index) {
        let router = this.$router;

        switch (index) {
          // 书架
          case 0:
            router.push({name: 'bookshelf'});
            break;
          // 书城
          case 1:
            router.push({name: 'bookCity'});
            break;
          // 排行
          case 2:
            router.push({name: 'rankings'});
            break;
          // 分类
          case 3:
            router.push({name: 'classification'});
            break;
          // 我的
          case 4:
            router.push({name: 'my'});
            break;
        }

        this.currentIndex = index;
        this.localforage.setItem('tabIndex', index);
      }
    }
  }
</script>

<style scoped>
  .nav {
    height: 3.5rem;
    display: flex;
  }

  .nav-box {
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-text {
    display: block;
  }

  .nav-image {
    max-height: 1.4rem;
  }

  .nav-image-div {
    margin-bottom: -0.15rem;
  }
</style>
