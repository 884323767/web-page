<template>
  <div class="summary">
    <div class="menu-group">
      <div class="ui text menu">
        <a href="./test" class="ui blue button logo">logo</a>
        <a href="./summary" class="item active">Summary</a>
        <a href="./transfer" class="item">Transfer</a>
        <a href="./portfolio" class="item">Portfolio</a>
        <a href="./performance" class="item ">Performance</a>
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
            <div class="ui blue button" @click="addAccount">Add Account</div>
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
      <div class="item" v-for="account in accountData">
        <div class="title">{{account.type}}</div>
        <div class="number">{{account.money}}</div>
        <div class="chart">
          {{account.percent}}
          <div class="main" style="width:150px;height:150px;"></div>
        </div>
      </div>
    </div>
    <div class="select-container" v-show="selectAccount">
        <div class="top-container">
<!--             <i class="icon close" @click="close"></i>
 -->            <div class="label">Select an account type</div>
        </div>
        <div class="items-list">
            <div class="item-container" v-for="account in accountType" @click="selectItem()">
                <div class="title-container">
                    <div class="title">
                        {{account.type}}
                    </div>
                </div>
                <!-- <div class="item">
                    <div class="label">{{labels.transferOut.enableShares}}{{stock.shares}}{{labels.transferOut.stock}}</div>
                    <i class="icon select" :class="{'active': stock.clicked}" ></i>
                </div> -->
            </div>
        </div>
        <div class="ui form">
          <div class="grouped fields">
            <label>How often do you use checkboxes?</label>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="example2" checked="checked" tabindex="0" class="hidden">
                <label>Once a week</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox checked">
                <input type="radio" name="example2" tabindex="0" class="hidden">
                <label>2-3 times a week</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="example2" tabindex="0" class="hidden">
                <label>Once a day</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="example2" tabindex="0" class="hidden">
                <label>Twice a day</label>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-container">
            <button class="ui blue button" @click="confirm">confirm</button>
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
      ],
      accountData: [
        {
          type:'Traditional IRA',
          money:'$2,261.26',
          percent:'41%'
        },{
          type:'Retirement',
          money:'$1,111.26',
          percent:'90%'
        }
      ],
      accountType: [
        {
          type:'Traditional',
        },
        {
          type:'Retirement',
        },
        {
          type:'Rollover',
        },
        {
          type:'IRA',
        }
      ],
      selectAccount: false
    }
  },
  methods: {
    addAccount() {
      this.selectAccount = true;
    },
    selectItem() {

    },
    confirm(){
      this.addAccountItem();
      this.selectAccount = false;
    },
    finish(){

    },
    addAccountItem(item) {
      this.accountData.push({
        type:'Retirement',
        money:'$1,111.26',
        percent:'90%'});
      this.$nextTick(function () {
          this.drawChart();
      });
    },
    drawChart() {
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
    }
  },
  mounted() {
    $('.ui.checkbox').checkbox();
      this.$nextTick(function () {
        this.drawChart();
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
  .select-container{
      position: absolute;
      width: 80%;
      left: 10%;
      top: 200px;
      background: #fff;
      border: 1px solid #ddd;
      .top-container {
          height: 30px;
          text-align: center;
          position: relative;
          .close {
              position: absolute;
              left: rem(22);
              top: rem(22);
              width: rem(60);
              height: rem(60);
              background-size: rem(44) rem(44);

          }
          .label {
              line-height: 1;
              color: #999;
          }
      }
      .items-container {
          background: #fff;
          padding: 0 30px 60px;
          overflow: auto;
      }
      .item-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          border-bottom: 1px solid #ddd;
          .title-container {
              line-height: 1;
              .title {
                  color: #333;
              }
              .subtitle {
                  color: #868686;
                  display: flex;
                  align-items: center;
                  span {
                      display: inline-block;
                      background: #E99A94;
                      color: #fff;
                  }
              }
          }
          .item {
              display: flex;
              align-items: center;
              line-height: 1;
              .label {
                  color: #999;
                  display: inline-block;
              }
          }
      }
      .bottom-container {
          position: relative;
          bottom: 0;
          height: 98px;
          margin-top: 20px;
          text-align: center;
          .reset {
              background: #fff;
              color: #999;
              &:active {
                  background: #f0f0f0;
              }
          }
          .finish {
              color: #fff;
              &:active {
              }
          }
      }
  }
}
</style>
