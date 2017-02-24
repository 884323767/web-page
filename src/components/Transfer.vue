<template>
  <div class="transfer" :class="{'fullscreen': !scrollable}">
    <div class="menu-group">
      <div class="ui text menu">
        <a href="#/login" class="ui blue button logo">logo</a>
        <a href="#/summary" class="item active">Summary</a>
        <a href="#/transfer" class="item">Transfer</a>
        <a href="#/portfolio" class="item">Portfolio</a>
        <a href="#/performance" class="item ">Performance</a>
      </div>
    </div>
  <div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {

    }
  },
  computed: {
      accountValue(val) {
        console.log(val);
        return val;
      }
  },
  methods: {

  },
  mounted() {
    // $('.ui.radio.checkbox').checkbox()
  }
}
</script>

<style lang="scss">
.transfer{
}
</style>
