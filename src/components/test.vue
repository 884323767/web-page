<template>
  <div>
    <div>echarts</div>
    <div id="charts">
        <div id="main2"  :style="{width:'600px',height:'400px'}"></div>
    </div>
    <div id="charts">
        <div id="main3"  :style="{width:'600px',height:'400px'}"></div>
    </div>
    <calendar :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="clear" :placeholder="placeholder" ></calendar>

  </div>
</template>

<script >
import echarts from "echarts"
import mock from "../mock.js"
import calendar from './widgets/Calendar.vue'

export default{
      components: {
        calendar
      },
       data (){
           return {
               msg:"123",
               disabled: [],
               value: '2015-06-10',
               format: 'yyyy-MM-dd',
               clear: true,
               placeholder: 'placeholder is displayed when value is null or empty'
           }
       },
       mounted (){
           var myChart = echarts.init(document.getElementById('main2'));
           function randomData() {
               now = new Date(+now + oneDay);
               value = value + Math.random() * 21 - 10;
               return {
                   name: now.toString(),
                   value: [
                       [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                       Math.round(value)
                   ]
               }
           }

           var data = [];
           var now = +new Date(1997, 9, 3);
           var oneDay = 24 * 3600 * 1000;
           var value = Math.random() * 1000;
           for (var i = 0; i < 1000; i++) {
               data.push(randomData());
           }

           var option = {
               title: {
                   text: 'test'
               },
               tooltip: {
                   trigger: 'axis',
                   formatter: function (params) {
                       params = params[0];
                       var date = new Date(params.name);
                       return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                   },
                   axisPointer: {
                       animation: false
                   }
               },
               xAxis: {
                   type: 'time',
                   splitLine: {
                       show: false
                   }
               },
               yAxis: {
                   type: 'value',
                   boundaryGap: [0, '100%'],
                   splitLine: {
                       show: false
                   }
               },
               series: [{
                   name: 'test',
                   type: 'line',
                   showSymbol: false,
                   hoverAnimation: false,
                   data: data
               }]
           };
           myChart.setOption(option);

           var myChart3= echarts.init(document.getElementById('main3'));
           var ret = mock.testData;
           var labels = ret.data.labels;
           var data = ret.data.data;
           var min = ret.min;
           var max = ret.max;
                  function fmtMoney(s, n) {
                      var n = n > 0 && n <= 20 ? n : 2;
                      var s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
                      var l = s.split(".")[0].split("").reverse(),
                          r = s.split(".")[1];
                      var t = "";
                      for (var i = 0; i < l.length; i++) {
                          t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length && l[i+1] != '-' ? "," : "");
                      }
                      return t.split("").reverse().join("") + "." + r;
                  }
                  var option = {
                      title: {
                          text: '预期获利'
                      },
                      tooltip: {
                          trigger: 'axis',
                          // formatter:"{b}年预期收益<br />{a0}收益: ${c0}<br />{a1}收益: ${c1}<br />{a2}收益: ${c2}<br />{a3}收益: ${c3}<br />{a4}收益: ${c4}"
                          backgroundColor: 'rgba(255,2552,255,0.9)',
                          borderColor: '#b6ccdc',
                          textStyle: {
                              color: '#303030'
                          },
                          extraCssText: 'box-shadow: 0 0 5px #b6ccdc',
                          axisPointer: {
                              type: 'line',
                              lineStyle: {
                                  color: '#000',
                                  width: '2'
                              }
                          },
                          formatter: function (params, ticket, callback) {
                              var html = new Array();
                              if (params instanceof Array) {
                                  html += '<h2 style="margin-top: 10px;margin-bottom: 10px;color: #333;font-size: 15px">' + params[0].name + '年<h2>';
                                  var last = 0;
                                  var arr = new Array();
                                  for (var i = 0; i < params.length; i++) {
                                      var n = parseFloat(params[i].data) + last;
                                      last = n;
                                      n = fmtMoney(n, 0);
                                      n = "$" + n;
                                      arr.push('<p style="margin-top: 10px;margin-bottom: 10px;color: #333;font-size: 15px"><span style="display: inline-block;width: 200px;">' + params[i].seriesName + '收益</span><span>' + n + '</span></p>');
                                  }
                              }
                              return html + arr.reverse().join("");
                          }
                      },
                      toolbox: {
                          feature: {
                              saveAsImage: {}
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis: [
                          {
                              type: 'category',
                              boundaryGap: false,
                              data: labels
                          }
                      ],
                      yAxis: [
                          {
                              min: min,
                              max: max,
                              position: "right",
                              type: 'value',
                              axisLabel: {
                                  formatter: '${value}'
                              },
                              splitLine: {
                                  lineStyle: {
                                      opacity: 0.3
                                  }
                              }
                          }
                      ],
                      series: [
                          {
                              name: '95%可能',
                              type: 'line',
                              smooth: true,
                              stack: '总量',
                              showSymbol: false,
                              lineStyle: {
                                  normal: {
                                      color: "#969797",
                                      opacity: 1
                                  }
                              },
                              areaStyle: {
                                  normal: {
                                      color: "#fff"
                                  }
                              },
                              data: data[0]
                          },
                          {
                              name: '75%可能',
                              type: 'line',
                              smooth: true,
                              stack: '总量',
                              showSymbol: false,
                              lineStyle: {
                                  normal: {
                                      color: "#969797",
                                      opacity: 0
                                  }
                              },
                              areaStyle: {
                                  normal: {
                                      color: "#E9F6F8"
                                  }
                              },
                              data: data[1]
                          },
                          {
                              name: '50%可能',
                              type: 'line',
                              smooth: true,
                              stack: '总量',
                              showSymbol: false,
                              lineStyle: {
                                  normal: {
                                      color: "#133B65",
                                      opacity: 1
                                  }
                              },
                              areaStyle: {
                                  normal: {
                                      color: "#DAF0F2"
                                  }
                              },
                              data: data[2]
                          },
                          {
                              name: '25%可能',
                              type: 'line',
                              smooth: true,
                              stack: '总量',
                              showSymbol: false,
                              lineStyle: {
                                  normal: {
                                      opacity: 0
                                  }
                              },
                              areaStyle: {
                                  normal: {
                                      color: "#DAF0F2"
                                  }
                              },
                              data: data[3]
                          },
                          {
                              name: '5%可能',
                              type: 'line',
                              smooth: true,
                              stack: '总量',
                              showSymbol: false,
                              lineStyle: {
                                  normal: {
                                      opacity: 0
                                  }
                              },
                              areaStyle: {
                                  normal: {
                                      color: "#E9F6F8"
                                  }
                              },
                              data: data[4]
                          }
                      ]
                  };
           myChart3.setOption(option);

       }

   }
</script>

<style>
  #charts{
    width: 100%;
    text-align: center;
  }
</style>
