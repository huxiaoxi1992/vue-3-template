<template>
  <img v-for="item in list" :key="item" :src="require(`@/assets/${item.img}`).default" />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <el-button>一个按钮</el-button>
</template>
<script >
export default {
  setup() {
    const list = [{ img: '123.png' }, { img: 'logo.png' }];
    return { list };
  },
};
</script>
<style lang="scss">
#app {
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
