<template>
  <div class="summary" :class="{'fullscreen': !scrollable}">
    <div class="menu-group">
      <div class="ui text menu">
        <a href="#/login" class="ui blue button logo">logo</a>
        <a href="#/summary" class="item active">Summary</a>
        <a href="#/transfer" class="item">Transfer</a>
        <a href="#/portfolio" class="item">Portfolio</a>
        <a href="#/performance" class="item ">Performance</a>
      </div>
    </div>
    <div class="summary-container">
      <div class="main-content">
        <div class="balance-container">
          <div class="balance">
            <div>
              <h5 class="white">TOTAL BETTERMENT BALANCE</h5>
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
              <i class="question circle icon right"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="account-content ">
      <div class="header-container">
        <h2 class="ui header">Overview</h2>
      </div>
      <div class="items-container">
        <div class="item" v-for="account in accountData">
          <div class="title">
            <div class="sub-title">
             Individual Taxable Account
            </div>
            <i class="angle right large icon"></i>
            <p class="title-type">{{account.type}}</p>
          </div>
          <div class="number">
            Current Balance
            <div class="number-label">{{account.money}}</div>
            Earnings {{account.money}}
          </div>
          <div class="chart">
            <div>
              <div class="chart-label">Allocation | <a>view</a></div>
              <div class="chart-label large">{{account.percent}} Stocks</div>
            </div>
            <div class="main" style="width:150px;height:150px;"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="select-container animated fadeInDown" v-show="selectAccount">
        <!-- <div class="top-container"> -->
<!--             <i class="icon close" @click="close"></i>
 --><!--             <div class="label">Select an account type</div>
        </div>
        <div class="items-list">
            <div class="item-container" v-for="account in accountType" @click="selectItem()">
                <div class="title-container">
                    <div class="title">
                        {{account.type}}
                    </div>
                </div> -->
                <!-- <div class="item">
                    <div class="label">{{labels.transferOut.enableShares}}{{stock.shares}}{{labels.transferOut.stock}}</div>
                    <i class="icon select" :class="{'active': stock.clicked}" ></i>
                </div> -->
<!--             </div>
        </div> -->
        <div class="left-container">
            <img class="ui large rounded image" src="../assets/macbook.png">
        </div>
        <div class="right-container">
          <div class="ui form">
            <div class="grouped fields">
              <label for="account" class="form-title">Select an account type</label>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="account"  id="Individual" value="Individual" v-model="selectType">
                  <label for="Individual">Individual</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox " >
                  <input type="radio" name="account" id="Rollover" value="Rollover" v-model="selectType">
                  <label for="Rollover">Rollover</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="account" id="IRA" value="IRA" v-model="selectType">
                  <label for="IRA">IRA</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="account" id="Joint" value="Joint Account" v-model="selectType">
                  <label for="Joint">Joint Account</label>
                </div>
              </div>
              <div class="field">
                <div class="ui radio checkbox">
                  <input type="radio" name="account" id="trust" value="trust" v-model="selectType">
                  <label for="trust">An account in the name of an existing trust.</label>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-container">
              <button class="ui blue button" @click="confirm">confirm</button>
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
      ],
      accountData: [
        {
          type:'Traditional IRA',
          money:'$2,261.26',
          percent:'41%'
        }
        // },{
        //   type:'Retirement',
        //   money:'$1,111.26',
        //   percent:'90%'
        // }
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
      selectAccount: false,
      scrollable: true,
      selectType: 'default'
    }
  },
  computed: {
      accountValue(val) {
        console.log(val);
        return val;
      }
  },
  methods: {
    addAccount() {
      this.selectAccount = true;
      this.scrollable = false;
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
    var type= this.selectType;
     var  data = Math.random()*2000;
     var percent = (data/(335+310+234+135+data)*100).toFixed();

      this.accountData.push({
        type: type,
        money:'$'+ data.toFixed(2),
        percent: percent+'%'});
      this.$nextTick(function () {
          this.drawChart(data);
      });
    },
    drawChart(data) {
      var option = {
           tooltip : {
               trigger: 'item',
               formatter: "{a} <br/>{b} : {c} ({d}%)"
           },
           calculable : true,
           series : [
               {
                   name:'test',
                   type:'pie',
                   radius : ['50%', '70%'],
                   avoidLabelOverlap: false,
                   itemStyle : {
                       normal : {
                           label : {
                               show : false,
                               position: 'center'
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
                                   fontSize : '20',
                                   fontWeight : 'normal'
                               }
                           }
                       }
                   },
                   data:[
                       {value:335, name:'港股'},
                       {value:310, name:'美股'},
                       {value:234, name:'沪深'},
                       {value:135, name:'基金'},
                       {value:548, name:'ETF'}
                   ]
               }
           ]
       };
       var mainDom = $('.main');
       for(var i=0;i<mainDom.length;i++){
        if(data&& i == mainDom.length - 1){
            option.series[0].data[4].value = data;
          }
          var myChart = echarts.init(mainDom[i]);
          myChart.setOption(option);
       }
    }
  },
  mounted() {
    // $('.ui.radio.checkbox').checkbox()
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
    padding: 7rem 5rem 3rem;
    .balance-container{
      min-width: 978px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .balance{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 10px;
      margin-bottom: 40px;
    }
    .white {
      color: #fff;
    }
    .large-number{
      font-weight: 300;
      font-size: 3rem;
      color: #ffffff;
      text-decoration: none;
      margin-top: 1rem;
      text-align: left;
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
        margin-bottom: 35px;
      }
      .header_name::after{
        position: absolute;
        height: 6px;
        width: 118%;
        border-radius: 3px;
        background-color: #225b8c;
        content:"\200B";
        display:block;
        top: 111px;
        left: -18px;
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
  .account-content{
    width: 100%;
    margin: 0 auto;
    padding: 2rem 5rem 3rem;
  }
  .header-container {
    text-align: left;
    min-width: 978px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .items-container{
    min-width: 978px;
    max-width: 1200px;
    margin: 0 auto;
    margin: 20px auto 0;
    min-width: 978px;
    max-width: 1200px;
    border-top: 2px solid #1689e5;
    .item{
      padding: 40px 10px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #dddddd;
      .title {
        text-align: left;
        color: #1689e5;
        .sub-title{
          color: #333333;
          margin-bottom: 30px;
        }
        .title-type{
          display: inline-block;
          line-height: 1;
          vertical-align: middle;
          font-size: 1.5em;
        }
      }
      .number {
        color: #333333;
        line-height: 1.3;
        .number-label{
          padding: 15px 0 30px;
          font-size: 2em;
        }
      }
      .chart {
        display: flex;
        justify-content: space-between;
        .chart-label {
          padding-bottom: 15px;
          a {
            color: #1689e5;
            cursor: pointer;
            text-decoration: none;;
          }
          &.large {
            font-size: 2em;
          }
        }
        .main {
          margin-top: -25px;
        }
      }
    }
  }
  .select-container{
      position: absolute;
      width: 80%;
      height: 65%;
      left: 10%;
      top: 200px;
      background: #fff;
      border: 1px solid #ddd;
      display: flex;
      align-items: center;
      text-align: center;
      .left-container{
          flex: 1;
          img{
            margin: 0 auto;
          }
      }
      .right-container{
        flex:1;
        text-align: left;
        label.form-title{
          font-weight: 500;
          font-size: 2.25em;
          color: #333333;
          margin: 0;
          padding-bottom: 20px;
          line-height: 1.2;
        }
        .ui.radio.checkbox input:checked~label:after {
          background-color:#1678c2;
        }
        .ui.radio.checkbox{
          label{
            color: #555;
            font-size: 1.5rem;
          }
        }
      }
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
          top: 28px;
          height: 98px;
          margin-top: 20px;
          text-align: left;
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
