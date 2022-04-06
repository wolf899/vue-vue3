<template>
  <div id="app">
    <Category title="美食">
      <img src="http://s3.ax1x.com/2021/01/16/srJlq0.jpg">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(game,index) in games" :key="index">{{game}}</li>
      </ul>
    </Category>
    <Category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: {Category},
  data(){
    return{
      foods:['蒸羊羔','蒸熊掌','蒸鹿尾儿','烧花鸭','烧子鹅'],
      games:['魔兽','LOL','DNF','CF','龙之谷'],
      films:['《哥斯拉》','《神奇宝贝》','《数码宝贝》','《金刚》','《多啦A梦》'],
    }
  }
}
</script>

<style scoped>
  #app {
    display: flex;
    justify-content: space-around;
  }
</style>
