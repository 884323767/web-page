<template>
<div class="pie-chart">
  <div id="charts" class="firstEchart">
      <div id="main"  :style="{'width': width,'height':height}"></div>
      <div class="round-assist-center bc">
          <div class="left-data">
              <em class="vStock">80</em>
              <h2>股票</h2>
          </div>
          <div class="right-data">
              <em class="vBond">20</em>
              <h2>债券</h2>
          </div>
      </div>
  </div>
</div>
</template>

<script >
import echarts from "echarts"
import mock from "../../mock.js"
export default{
        props:{
          width:{
            type: String,
            default: "600px"
          },
          height:{
            type: String,
            default: "400px"
          }
        },
       data (){
           return {
               chartData:mock.chartData
           }
       },
       mounted (){
           var myChart = echarts.init(document.getElementById('main'));
           myChart.setOption({
               tooltip: {
                   trigger: 'item',
                   formatter: "{b}<br/><p style='text-align: center;color: #2881ef;font-size: 16px'>{d}%</p>",
                   backgroundColor: 'rgba(255,2552,255,0.9)',
                   borderColor: '#b6ccdc',
                   textStyle: {
                       color: '#303030'
                   },
                   extraCssText: 'box-shadow: 0 0 5px #b6ccdc'
               },
               series: [
                   {
                       name: '投资类型',
                       type: 'pie',
                       clockwise:false,
                       radius: ['60%', '85%'],
                       label: {
                           normal: {
                               show: false
                           }
                       },
                       selectedMode: 'multiple',
                       data: this.chartData
                   }
               ]
           });
       }

   }
</script>

<style lang="scss" scope>
.pie-chart{
  #charts{
    display: flex;
    justify-content: center;
    position: relative;
  }
  .round-assist-center {
      position: absolute;
      top: 71px;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .round-assist-center .left-data, .round-assist-center .right-data {
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        line-height: 2rem;
        float: left;
        text-align: center;
        cursor: pointer;
        margin:0 10px;
      }
      .round-assist-center:after {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 0;
          margin-left: -0.5px;
          margin-top: -19px;
          display: block;
          height: 55px;
          width: 2px;
          background: #666;
      }
    }
</style>
