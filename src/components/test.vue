<template>
  <div>
    <div>echarts</div>
<!--     <div id="charts">
        <div id="main2"  :style="{width:'600px',height:'400px'}"></div>
    </div>
    <div id="charts">
        <div id="main3"  :style="{width:'600px',height:'400px'}"></div>
    </div> -->
    <calendar
    :show="calendar.show"
    :type="calendar.type"
    :value="calendar.value"
    :x="calendar.x"
    :y="calendar.y"
    :begin="calendar.begin"
    :end="calendar.end"
    :range="calendar.range"
    :weeks="calendar.weeks"
    :months="calendar.months"
    :sep="calendar.sep">
    </calendar>

  </div>
</template>

<script >
import echarts from "echarts"
import calendar from "./widgets/Calendar.vue"
import mock from "../mock.js"
export default{
        components:{
            calendar
        },
       data (){
           return {
               msg:"123",
               calendar:{
                   show:false,
                   x:0,
                   y:0,
                   picker:"",
                   type:"date",
                   value:"",
                   begin:"",
                   end:"",
                   value:"",
                   sep:"/",
                   weeks:[],
                   months:[],
                   range:false,
                   items:{
                       // 单选模式
                       picker1:{
                           type:"date",
                           begin:"2016-08-20",
                           end:"2016-08-25",
                           value:"2016-08-21",
                           sep:"-",
                           weeks:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                           months:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                       },
                       // 2个日期模式
                       picker2:{
                           type:"date",
                           value:"",
                           range:true,
                           sep:".",
                       },
                       // 日期时间模式
                       picker3:{
                           type:"datetime",
                           value:"",
                           sep:"-",
                       },
                       // 日期时间模式
                       picker4:{
                           type:"time",
                           value:"",
                       },
                   }
               }
           }
       },
       watch:{
           'calendar.value': function (value) {
               this.calendar.items[this.calendar.picker].value=value
           }
       },
       open(e,type) {
           // 设置类型
           this.calendar.picker=type
           this.calendar.type=this.calendar.items[type].type
           this.calendar.range=this.calendar.items[type].range
           this.calendar.begin=this.calendar.items[type].begin
           this.calendar.end=this.calendar.items[type].end
           this.calendar.value=this.calendar.items[type].value
           // 可不用写
           this.calendar.sep=this.calendar.items[type].sep
           this.calendar.weeks=this.calendar.items[type].weeks
           this.calendar.months=this.calendar.items[type].months

           this.calendar.show=true
           this.calendar.x=e.target.offsetLeft
           this.calendar.y=e.target.offsetTop+e.target.offsetHeight+8
       },
       mounted (){

       }

   }
</script>

<style>
  #charts{
    width: 100%;
    text-align: center;
  }
</style>
