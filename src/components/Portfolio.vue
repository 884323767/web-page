<template>
    <div class="portfolio">
      <div class="menu-group">
        <div class="ui text menu">
          <a href="#/logo" class="ui blue button logo">logo</a>
          <a href="#/summary" class="item active">Summary</a>
          <a href="#/transfer" class="item">Transfer</a>
          <a href="#/portfolio" class="item">Portfolio</a>
          <a href="#/performance" class="item ">Performance</a>
        </div>
      </div>
        <div class="title">Portfolio</div>
        <div class="main-container">
          <div class="tab-header">
            <div>
             <h3 class="tab-title">Select a Portfolio</h3>
             <selection :items="items" :defaultText="defaultText" :selected="1" @selected-change="changeType"></selection>

            </div>
              <div class="label">Retirement Growth</div>
          </div>
          <ul class="balance-list">
            <li class="items">
              <div class="header_name">Traditional IRA</div>
              <div class="money_num">$2,255.42</div>
              <i class="question icon right"></i>
            </li>
            <li class="items">
              <div class="header_name ">Retirement 2</div>
              <div class="money_num orange">Too Conservative</div>
              <i class="question icon right"></i>
            </li>
            <li class="items">
              <div class="header_name">Retirement</div>
              <div class="money_num">Normal <span class="label">0.7%</span></div>
              <i class="question icon right"></i>
            </li>
          </ul>
          <div class="content-container">
            <div class="chart">
              <pie-chart v-show="pieChart"></pie-chart>
              <line-chart v-show="!pieChart"></line-chart>
              <div class="ui inverted blue button">Adjust target allocation</div>
            </div>
            <div class="info">
              <div class="title-list">
                <div class="first">Holdings</div>
                <div class="first">Current Weight</div>
                <div class="second">Fund Fees per Year</div>
                <div class="second">Current Value</div>
              </div>
              <div class="items-container ui animated list" v-for="item in portData">
                <div class="item first">
                <i class="angle right icon"></i>
                {{item.name}}</div>
                <div class="first ">
                  <span class="percent">{{item.percentage}}</span>
                  <div class="graph-bar" :style="{'width': item.percentage}"></div>
                </div>
                <div class="second">{{item.money}}</div>
                <div class="second">${{item.index}}</div>
              </div>
            </div>
          </div>
        </div>
    <div>
</template>

<script>
import selection from './widgets/Selection.vue'
import pieChart from './widgets/PieChart.vue'
import lineChart from './widgets/LineChart.vue'
import echarts from "echarts"
export default {
    components: {
        selection, pieChart,lineChart
    },
    route: {
        data(transition) {

        }
    },
    data() {
        return {
          items: [
            {name: 'Traditional IRA', Value: 0},
            {name: 'Retirement 2', Value: 1},
            {name: 'Retirement', Value: 2}
          ],
          defaultText: '请选择',
          selected: 'Retirement',
          balanceData:[
            {
              name:'Traditional IRA',
              value:'$2,255.42'
            },
            {
              name:'Retirement 2',
              value:'Too Conservative'
            },
            {
              name:'Retirement',
              value:'Normal 0.7%'
            }
          ],
          portData: [
            {
                name:"US Total Stock",
                money:"$190.87",
                percentage:"8.5%",
                index:0
            },
            {
                name:"US Total Stock",
                money:"$190.87",
                percentage:"18.5%",
                index:1
            },
            {
                name:"US Total Stock",
                money:"$190.87",
                percentage:"28.5%",
                index:2
            },
            {
                name:"US Total Stock",
                money:"$190.87",
                percentage:"38.5%",
                index:3
            },
            {
                name:"US Total Stock",
                money:"$190.87",
                percentage:"8.5%",
                index:0
            },
            {
                name:"US Total Stock",
                money:"$190.87",
                percentage:"18.5%",
                index:1
            },
            {
                name:"US Total Stock",
                money:"$190.87",
                percentage:"28.5%",
                index:2
            },
            {
                name:"US Total Stock",
                money:"$190.87",
                percentage:"38.5%",
                index:3
            }
          ],
          bonsData: [
            {
                name:"US Total Stock",
                money:"$190.87",
                percentage:"8.5%",
                index:0
            },
            {
                name:"US Total Stock",
                money:"$190.87",
                percentage:"18.5%",
                index:1
            },
            {
                name:"US Total Stock",
                money:"$190.87",
                percentage:"28.5%",
                index:2
            },
            {
                name:"US Total Stock",
                money:"$190.87",
                percentage:"38.5%",
                index:3
            }
          ],
          pieChart: true
        }
    },
    computed: {
        validUser() {
            return new Date();
        }
    },
    methods: {
        tipsShow: function() {
            // clearTimeout(this.tipsFlag);
            // this.showTips = true;
        },
        changeType(val) {
            console.log('changeType'+val)
            this.pieChart = !this.pieChart;
        }
    },
  mounted() {
      this.$nextTick(function () {

    });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.portfolio{
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
  .title {
    display: block;
    margin: 0 auto 35px;
    color: #ffffff;
    width: 100%;
    padding: 1em 2em;
    background-color: #17406B;
    text-align: left;
    font-size: 2rem;
    }
  }
  .main-container{
    max-width: 1200px;
    padding: 0 2em 20px;
    margin: 0px auto;
    min-height: 830px;
    position: relative;
    .tab-header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 30px;
      border-bottom: 1px solid #ddd;
      .tab-title{
        text-align: left;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 1rem;
        color: #333;
      }
      .label {
        font-size: 1.4rem;
        padding-top: 1.2rem;
      }
    }
    .balance-list{
      margin-top: 25px;
      display: flex;
      justify-content: space-between;
      .items {
        background-color: #f9f9f9;
        border-bottom-color: #dddddd;
        overflow: visible;
        width: 30%;
        padding: 25px 20px;
        color: #fff;
        text-align: left;
        margin: 0px;
      }

      .header_name{
        position: relative;
        margin-bottom: 10px;
        color: #ccc;
      }
      .header_name::after{
        position: absolute;
        height: 6px;
        width: 113%;
        border-radius: 3px;
        background-color: #ddd;
        content:"\200B";
        display:block;
        top: 78px;
        left: -19px;
      }
      .money_num{
        font-size: 20px;
        color: #333333;
        margin-top: 10px;
        &.orange {
          color: #fb7c00;
        }
        .label {
          color: #999;
        }
      }
      .right{
        top: -20px;
        float: right;
        position: relative;
      }
    }
    .content-container{
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
      .chart{
        border-top: 1px solid #ddd;
        transform: scale(0.7);
        margin-left: -90px;
        margin-top: -37px;
      }
      .info{
        flex: 1;
        .first{
          flex:1.5;
          text-align: left;
        }
        .second{
          flex:1;
          text-align: right;
        }
        .title-list{
          display: flex;
          align-items: center;
          color: #333333;
          font-size: 12px;
          padding-bottom: 10px;
          text-transform: uppercase;
          border-bottom: 1px solid #ddd;
        }
        .items-container{
          display: flex;
          align-items: center;
          line-height: 19px;
          font-size: 16px;
          font-weight: 500;
          color: #686868;
          padding-top: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #ddd;
          .first{
            width: 100px;
            flex: auto;
          }
          .percent {
            min-width: 3rem;
            display: inline-block;
          }
          .graph-bar{
            width: 20%;
            background-color: #8bc5ff;
            height: 20px;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
