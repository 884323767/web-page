<template>
  <div class="semantic-component">
    <div class="ui selection dropdown semanticDropDown">
      <input type="hidden" name="gender" v-model="selected">
      <i class="dropdown icon"></i>
      <div class="default text">{{defaultText}}</div>
      <div class="menu">
        <div class="item" :data-value="item.Value"
             v-for="item in items"
             @click="changeSelection(item)">
          {{ item.name }}
        </div>
      </div>
    </div>
    <!-- <pre>{{selectedItem}}</pre> -->
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      },
      selected:{
        type: String,
        default: ''
      },
      defaultText: {
        type: String,
        default: ''
      }
    },
    computed: {
      // selecteditem() {
      //   if(selecteditem){
      //     return selecteditem;
      //   } else {
      //     return {};
      //   }
      // }
    },
    methods: {
      changeSelection(item) {
        this.selectedItem = item
        // this.selected = item.Value
      }
    },
    mounted() {
      this.selecteditem = {}
      $(this.$el).find('.semanticDropDown').dropdown()
    }
  }
</script>

<style></style>
