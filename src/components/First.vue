<template>
  <div>
    <div>echarts</div>
    <div id="charts">
        <div id="main"  :style="{width:'600px',height:'400px'}"></div>
        <div id="main1" :style="{width:'600px',height:'400px'}"></div>
    </div>
  </div>
</template>

<script >
import echarts from "echarts"
export default{
       data (){
           return {
               msg:"123"
           }
       },
       mounted (){
           var myChart = echarts.init(document.getElementById('main'));
           myChart.setOption({
                title : {
                    text: '某站点用户访问来源',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'left',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'直接访问'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1548, name:'搜索引擎'}
                        ]
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

<style></style>
