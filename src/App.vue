<template>
  <div id="app">
    <ul>
        <li><router-link to="/first">第一页</router-link></li>
        <li><router-link to="/test">test</router-link></li>
        <li><router-link to="/login">login</router-link></li>
        <li><router-link to="/register">register</router-link></li>
        <li><router-link to="/summary">summary</router-link></li>
        <li><router-link to="/portfolio">portfolio</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  components: { },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
