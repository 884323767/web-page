<template>
  <div class="semantic-component">
  <div>test   test</div>
    <div class="ui selection dropdown semanticDropDown">
      <input type="hidden" name="gender" v-model="selected">
      <i class="dropdown icon"></i>
      <div class="default text">Gender</div>
      <div class="menu">
        <div class="item" :data-value="item.Value"
             v-for="item in items"
             @click="changeSelection(item)">
          {{ item.Gender }}
        </div>
      </div>
    </div>
  </div>
</template>

<script >
  export default {
    data() {
      return {
        items       : [
          {Gender: 'Male', Value: 1},
          {Gender: 'Female', Value: 0}
        ],
        selected    : '',
        selecteditem: {}
      }
    },
    methods: {
      changeSelection(item) {
        this.selectedItem = item
        this.selected = item.Value
      }
    },
    mounted() {
      this.selecteditem = {}
      $(this.$el).find('.semanticDropDown').dropdown()
    }
  }
</script>

<style></style>
