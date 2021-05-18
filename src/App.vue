<template>
  <div class="app">
      <router-view/>
      <van-tabbar route v-if="show">
        <van-tabbar-item to="/" icon="home-o">QUI</van-tabbar-item>
        <van-tabbar-item to="/three" icon="search">Three.js</van-tabbar-item>
        <van-tabbar-item to="/mine" icon="friends-o">mine</van-tabbar-item>
      </van-tabbar>
  </div>
</template>
<script>
  export default {
    name:'app',
    computed:{
      show(){
        return this.$route.path === '/' || this.$route.path === '/three' || this.$route.path === '/mine'
      }
    }
  }
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
