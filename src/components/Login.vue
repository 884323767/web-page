<template>
  <div class="login">
    <div class="top-container">
      <div class="image hikers show"></div>
      <div class="header">
          <a href="#/login" class="ui blue button logo">logo</a>
          <div class="sign-up">
              <a href="#/register" class="ui blue button">Don't have an account?</a>
              <a href="#/register" class="ui teal button">Sign up</a>
          </div>
      </div>
      <div class="main-content">
        <div class="login-container">
          <div class="form-container">
              <h3 class="form-greeting">Welcome back</h3>
              <!-- <div class="ui left icon input"> -->
              <div class="ui form">
                <p>Email</p>
                <input type="text" v-model="email">
                <p>Password</p>
                <input type="password" v-model="password">
                <button class="ui blue button login-button" :class="{'loading disabled': loading,'disabled': !formReady}" @click="loginIn">Login in</button>
                <a href="#/reset" class="forget">Forgot password?</a>
              </div>
          </div>
          <div class="product-message" v-if="false">
            <div class="message">Tax season is here. <br>
              See what you can do now to get a head start. <br>
              <a href="#/learn" class="learn">learn more</a>
            </div>
            <div class="author">
              <h4>Shawn</h4>
              <h4>Customer Experience Manager</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="recent-articles">
      <div class="title">Here's the latest from the Resource Center:</div>
      <div class="ui grid">
        <div class="three column row">
          <div class="column image-link">
            <i class="image first"></i>The Fiduciary Rule Is on Life Support – We Must Act Now
          </div>
          <div class="column image-link">
            <i class="image second"></i>Ep. 007: Fiduciary Rule with Jon Stein
          </div>
          <div class="column image-link">
            <i class="image third"></i>Ep. 006: Kids and Financial Literacy with Beth Kobliner
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="ui grid">
        <div class="three column row">
          <div class="column">
          Unless otherwise specified, all return figures shown above are for illustrative purposes only,  <br>and are not actual customer or model returns. Actual returns will vary greatly and depend on personal and market circumstances.
          </div>
          <div class="column">
          . Investments: Not FDIC Insured • No Bank Guarantee • May Lose Value. Investing in securities involves risks, and there is always the potential of losing money when you invest in securities. Before investing, consider your investment objectives and Betterment's charges and expenses. Past performance does not guarantee future results, and the likelihood of investment outcomes are hypothetical in nature. See full disclosures for more information. Not an offer, solicitation of an offer, or advice to buy or sell securities in jurisdictions where Betterment is not registered. Market Data by
          </div>
          <div class="column">
          the largest independent robo-advisor.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from '../service.js'
var timer;
export default {
  components: {

  },
  mixins: [service],
  route: {
    data(transition) {

    }
  },
  data() {
    return {
      action: "登录",
      email: "",
      password: "",
      loading: false
    }
  },
  computed: {
    formReady() {
        return this.email && this.password;
    }
  },
  methods: {
    tipsShow: function() {
      // clearTimeout(this.tipsFlag);
      // this.showTips = true;
    },
    loginIn: function() {
      console.log(this.email);
      console.log(this.password);
      this.loading = true;
      var data = {
        where : {
          email: this.email
        }
      }
      console.log(data);
      console.log(JSON.stringify(data));
      clearTimeout(timer);
      timer = setTimeout(()=>{
        this.checkUser(encodeURI(JSON.stringify(data))).then(res => {
            console.log(res);
            var loginData = {
              uid: res.uid,
              password: this.password
            }
            this.login(loginData).then(res => {
                // if(res.code === 0) {
                //     var market = res.data.data.marketPostionGroup;
                //     for(let i = 0; i < market.length; i++) {
                //         if(market[i].marketCode == 'hk'){
                //             for(let j = 0; j < market[i].position.length; j++) {
                //                 if(market[i].position[j].enableVol > 0){
                //                     this.stocks.push({
                //                         "stock": market[i].position[j].stockName,
                //                         "state": "HK",
                //                         "code": market[i].position[j].stockCode,
                //                         "shares": parseInt(market[i].position[j].enableVol),
                //                         "select" : false,
                //                         "clicked": false
                //                     })
                //                 }

                //             }
                //         }
                //     }
                // } else {
                //     this.$dispatch('toast', this.labels.common.codeError);
                // }
                console.log(res);
                location.hash = "#/summary";

            }).catch(()=>{
              alert("登录失败");
                // this.$dispatch('toast', this.labels.common.error);
            }).finally(() => {
                // this.$dispatch('wait', false);
                // resolve();
                this.loading = false;
                console.log('finally');

            })
        }).catch(()=>{
          alert("账号不存在");
            // this.$dispatch('toast', this.labels.common.error);
        }).finally(() => {
            // this.$dispatch('wait', false);
            // resolve();
            this.loading = false;

            console.log('finally');
        })
      },200);

    }
  }
  // ready() {

  // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login{
  display: block;
  width: 100%;
  background-color: #fff;
  .top-container {
    position: relative;
    overflow: hidden;
    padding: 0 0 50px;
    min-height: 700px;
    background: linear-gradient(#1c4875 0%, #326ea5 100%);
    .image {
      opacity: 0.40;
      width: 100%;
      height: 100%;
      top: 0;
      position: absolute;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-image: url(../assets/hiker.jpg);
    }
    .header {
      position: relative;
      opacity: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 30px 2% 50px;
      display: flex;
      justify-content: space-between;
    }
    .main-content {
      max-width: 1200px;
      margin: 50px auto 0;
      position: relative;
      opacity: 1;
      padding-bottom: 175px;
      .login-container{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        opacity: 1;
        transition: opacity 0.6s ease-in-out;
        .form-container {
          flex-basis: 60%;
          .form-greeting {
            background: #354355;
            color: #ffffff;
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
            text-align: center;
            margin: 0 auto;
            padding-right: 10%;
            padding-left: 10%;
          }
          .form {
            padding-top: 1rem;
            padding-bottom: 7.5rem;
            background: #ffffff;
            margin: 0 auto;
            padding-right: 10%;
            padding-left: 10%;
            text-align: left;
            .login-button {
              width: 100%;
              margin-top: 32px;
            }
            .forget {
              float: right;
              margin-top: 2rem;
              font-size: 0.3rem;
              color: #1689e5;
              cursor: pointer;
              &:hover {
                color: #17406B;
              }
            }
          }
        }
        .product-message {
          flex-basis: 41%;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          background-image: url(../assets/woman.jpg);
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          text-align: left;
          padding-left: 2rem;
          padding-top: 3rem;
          padding-bottom: 2rem;
          .message{
            font-size: 1.5rem;
            .learn{
              padding-top: 2rem;
              display: block;
            }
          }
        }
      }
    }
  }
  .recent-articles {
    text-align: center;
    max-width: 1200px;
    padding: 0 3.0674846626%;
    margin: 0 auto;
    overflow: visible;
    position: relative;
    .title{
      margin-top: 2rem;
      margin-bottom: 3rem;
      font-size: larger;
    }
    .image-link {
      float: right;
      margin-top: 2rem;
      color: #1689e5;
      cursor: pointer;
      &:hover {
        color: #17406B;
      }
    }
    .image {
      display: inline-block;
      height: 200px;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      margin-bottom: 2rem;
    }
    .first {
      background-image: url(../assets/first.jpg);
    }
    .second{
      background-image: url(../assets/second.jpg);
    }
    .third{
      background-image: url(../assets/third.jpg);
    }
  }
  .footer {
    font-size: 12px;
    color: #999999;
    margin-bottom: 15px;
    line-height: 1.5;
    letter-spacing: 0.2px;
    text-align: left;
    max-width: 1200px;
    padding: 0 3.0674846626%;
    margin: 0 auto;
    border-top: 1px solid #dddddd;
    margin: 20px auto;
    padding-top: 30px;
    padding: 30px 2%;
    overflow: visible;
    position: relative;
  }
}
</style>
