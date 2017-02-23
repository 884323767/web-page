<template>
  <div>
    <div>echarts</div>
    <div id="charts" class="firstEchart">
        <div id="main"  :style="{width:'600px',height:'400px'}"></div>
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
        <div id="main1" :style="{width:'600px',height:'400px'}"></div>
    </div>
  </div>
</template>

<script >
import echarts from "echarts"
import mock from "../mock.js"
export default{
       data (){
           return {
               msg:"123",
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
           var myChart1 = echarts.init(document.getElementById('main1'));
           myChart1.setOption({
                legend: {
                    data:['not inflation adjusted']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: false},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar']},
                        restore : {show: false},
                        saveAsImage : {show: false}
                    }
                },
                calculable : true,
                tooltip : {
                    trigger: 'axis',
                    formatter: "Temperature : <br/>{b}km : {c}°C"
                },
                xAxis : [
                    {
                        type : 'value',
                        axisLabel : {
                            formatter: '{value} °C'
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'category',
                        axisLine : {onZero: false},
                        axisLabel : {
                            formatter: '{value} km'
                        },
                        boundaryGap : false,
                        data : ['0', '10', '20', '30', '40', '50', '60', '70', '80']
                    }
                ],
                series : [
                    {
                        name:'not inflation adjusted',
                        type:'line',
                        smooth:true,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    shadowColor : 'rgba(0,0,0,0.4)'
                                }
                            }
                        },
                        data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
                    }
                ]
           });
       }

   }
</script>

<style>
  #charts{
    display: flex;
    justify-content: center;
    position: relative;
  }
  .firstEchart{
    flex-direction: column;
    align-items: center;
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
</style>
