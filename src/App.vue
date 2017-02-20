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
<style lang="scss" src="./sass/main.scss"></style>
