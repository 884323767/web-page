<template>
  <div id="app">
    <ul class="test" v-show="showTest">
        <li><router-link to="/first">echart</router-link></li>
        <li><router-link to="/test">test</router-link></li>
        <li><router-link to="/login">login</router-link></li>
        <li><router-link to="/register">register</router-link></li>
        <li><router-link to="/summary">summary</router-link></li>
        <li><router-link to="/portfolio">portfolio</router-link></li>
        <li><button class="ui blue button logo" @click="hideTest">Hide</button></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  components: { },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showTest: true
    }
  },
  methods: {
    hideTest() {
      this.showTest = false;
    }
  }
}
</script>
<style lang="scss" src="./sass/main.scss"></style>
<style>
  .test{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
  }
</style>
