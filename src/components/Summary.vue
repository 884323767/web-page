<template>
  <div class="summary">
    <div class="menu-group">
      <div class="ui text menu">
        <a href="/test" class="ui blue button logo">logo</a>
        <a href="/Summary" class="item active">Summary</a>
        <a href="/Transfer" class="item">Transfer</a>
        <a href="/portfolio" class="item">Portfolio</a>
        <a href="/performance" class="item ">Performance</a>
      </div>
    </div>
    <div class="summary-container">
      <div class="main-content">
        <div class="balance">
          <div>
            <h5>TOTAL BETTERMENT BALANCE</h5>
            <h1 class="large-number">$2,256.25</h1>
          </div>
          <div>
            <div class="ui blue button">Add Account</div>
            <div class="ui positive button">Transfer</div>
          </div>
        </div>
        <ul class="balance-list">
          <li class="items" v-for="item in balanceData">
            <div class="header_name">{{item.name}}</div>
            <div class="money_num">{{item.money_num}}</div>
            <i class="question icon right"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="items-container">
      <div class="item">
        <div class="title">Traditional IRA</div>
        <div class="number">$2,256.25</div>
        <div class="chart">
          <div class="main" style="width:150px;height:150px;"></div>
        </div>
      </div>
      <div class="item">
        <div class="title">Traditional IRA</div>
        <div class="number">$2,256.25</div>
        <div class="chart">
          <div class="main" style="width:150px;height:150px;"></div>
        </div>
      </div>
    </div>


  <div>
</template>

<script>

import echarts from "echarts"
export default {
  components: {
  },
  data() {
    return {
      balanceData:[
        {
          name:'Traditional IRA',
          money_num:'$2,255.42'
        },
        {
          name:'Retirement 2',
          money_num:'$3.00'
        },
        {
          name:'Retirement',
          money_num:'$0.00'
        },
        {
          name:'Retirement',
          money_num:'$1.00'
        }
      ]
    }
  },
  methods: {
    changeSelection(item) {
      this.selected = item.Value
    }
  },
  mounted() {
      this.$nextTick(function () {
       var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: false},
                    dataView : {show: false, readOnly: false},
                    magicType : {
                        show: false,
                        type: ['pie', 'funnel'],
                        option: {
                            funnel: {
                                x: '25%',
                                width: '50%',
                                funnelAlign: 'center',
                                max: 1548
                            }
                        }
                    },
                    restore : {show: false},
                    saveAsImage : {show: false}
                }
            },
            calculable : false,
            series : [
                {
                    name:'test',
                    type:'pie',
                    radius : ['50%', '70%'],
                    itemStyle : {
                        normal : {
                            label : {
                                show : false
                            },
                            labelLine : {
                                show : false
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                position : 'center',
                                textStyle : {
                                    fontSize : '30',
                                    fontWeight : 'bold'
                                }
                            }
                        }
                    },
                    data:[
                        {value:335, name:'01'},
                        {value:310, name:'02'},
                        {value:234, name:'03'},
                        {value:135, name:'04'},
                        {value:1548, name:'05'}
                    ]
                }
            ]
        };
        var mainDom = $('.main');
        for(var i=0;i<mainDom.length;i++){
           var myChart = echarts.init(mainDom[i]);
           myChart.setOption(option);
        }
    });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
.summary{
  .menu-group{
    padding: 0 5em;
    background-color: #17406B;
    text-align: left;
    height: 70px;
    display: flex;
    align-items: center;
    .ui.text.menu a{
      color: #fff;
      &.hover {
        color: #90caf9;
      }
    }
  }
  .summary-container {
    display: block;
    background-color: #ffffff;
  }
  .main-content {
    width: 100%;
    background-image: linear-gradient(#194069 0%, #326ea5 100%);
    margin: 0 auto;
    padding: 7rem 5rem 4.5rem;
    .balance{
      display: flex;
      align-items: center;
      justify-content: space-between;

    }
    .large-number{
      font-weight: 300;
      font-size: 3rem;
      color: #ffffff;
      text-decoration: none;
      margin-top: 1rem;
    }
    .balance-list{
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      .items {
        background-color: #2f6699;
        border-bottom-color: #225b8c;
        overflow: visible;
        width: 24%;
        padding: 25px 20px;
        color: #fff;
        text-align: left;
      }
      .header_name{
        position: relative;
        margin-bottom: 10px;
      }
      .header_name::after{
        position: absolute;
        height: 6px;
        width: 117%;
        border-radius: 3px;
        background-color: #225b8c;
        content:"\200B";
        display:block;
        top: 78px;
        left: -19px;
      }
      .money_num{
        font-size: 26px;
        margin-top: 10px;
      }
      .right{
        top: -20px;
        float: right;
        position: relative;
      }
    }
  }
  .items-container{
    width: 90%;
    margin: 20px auto 0;
    min-width: 978px;
    max-width: 1200px;
    border-top: 2px solid #1689e5;
    .item{
      padding: 40px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #dddddd;
      .title {
        color: #1689e5;
      }
      .number {
        color: #333333;
        font-size: 2.4rem;
        line-height: 1.3;
      }
    }
  }
}
</style>
