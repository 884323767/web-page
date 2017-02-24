<template>
  <div class="interface">
    <h1>interface</h1>
    <div class="interface-container">
      <div class="left-container">
        <div class="request" v-for="(value, key) in items">
          <button class="ui blue button" @click="requestRun(key)">{{key}}</button>
          <p>{{value}}</p>
        </div>
      </div>
      <div class="right-container">
        <p v-for="value in result">{{value}}</p>
      </div>
    </div>
  </div>
</template>

<script >
import service from '../service.js';
export default {
      components: {

      },
      mixins: [service],
       data (){
           return {
               msg:"123",
               items: {
                "portfolioHistory": "https://test.aqumon.com/v1/user/0/account/0/portfolio/history",
                "master": "https://test.aqumon.com/v1/user/0/account/master",
                "preference": "https://test.aqumon.com/v1/user/0/account/0/preference",
                "portfolio": "https://test.aqumon.com/v1/user/0/account/0/portfolio/",
                "invtAccount": "https://test.aqumon.com/v1/user/0/account/invt-account",
                "drift": "https://test.aqumon.com/v1/user/0/account/0/drift",
                "detail": "https://test.aqumon.com/v1/user/0/account/0/",
                "target": "https://test.aqumon.com/v1/user/0/account/0/target"
              },
              result: ["request result"]
           }
       },
       methods: {
          portfolioHistory() {
            console.log('get ')
            var data=null;
            this.getPortfolioHistory(data).then(res => {
                console.log(res);
                this.result.push(JSON.stringify(res));
            }).catch((err)=>{
              this.result.push(err);
              console.log('err');
            }).finally(() => {
              console.log('finally');
            })
          },
          master() {
            console.log('get ')
            var data=null;
            this.getMaster(data).then(res => {
                console.log(res);
                this.result.push(JSON.stringify(res));
            }).catch((err)=>{
              this.result.push(err);
              console.log('err');
            }).finally(() => {
              console.log('finally');
            })
          },
          preference() {
            var data=null;
            this.getPreference(data).then(res => {
                console.log(res);
                this.result.push(JSON.stringify(res));
            }).catch((err)=>{
              this.result.push(err);
              console.log('err'+err);
            }).finally(() => {
              console.log('finally');
            })
          },
          portfolio() {
            var data=null;
            this.getPortfolio(data).then(res => {
                console.log(res);
                this.result.push(JSON.stringify(res));
            }).catch((err)=>{
              this.result.push(err);
              console.log('err'+err);
            }).finally(() => {
              console.log('finally');
            })
          },
          invtAccount() {
            var data=null;
            this.getInvtAccount(data).then(res => {
                console.log(res);
                this.result.push(JSON.stringify(res));
            }).catch((err)=>{
              this.result.push(err);
              console.log('err'+err);
            }).finally(() => {
              console.log('finally');
            })
          },
          drift() {
            var data=null;
            this.getDrift(data).then(res => {
                console.log(res);
                this.result.push(JSON.stringify(res));
            }).catch((err)=>{
              this.result.push(err);
              console.log('err'+err);
            }).finally(() => {
              console.log('finally');
            })
          },
          detail() {
            var data=null;
            this.getDetail(data).then(res => {
                console.log(res);
                this.result.push(JSON.stringify(res));
            }).catch((err)=>{
              this.result.push(err);
              console.log('err'+err);
            }).finally(() => {
              console.log('finally');
            })
          },
          target() {
            var data=null;
            this.getTarget(data).then(res => {
                console.log(res);
                this.result.push(JSON.stringify(res));
            }).catch((err)=>{
              this.result.push(err);
              console.log('err'+err);
            }).finally(() => {
              console.log('finally');
            })
          },
          requestRun(data) {
            this[data]();
          }
       },
       mounted (){

       }

   }
</script>

<style lang="scss">
  .interface {
    .interface-container {
      padding-top: 50px;
      display: flex;
      width: 80%;
      left: 10%;
      margin: 0 auto;
      p{
        padding: 5px;
        word-wrap: break-word;
        border-bottom: 1px solid #ddd;
      }
      .left-container {
        overflow: auto;
        border: 5px solid #ddd;
        text-align: left;
        width: 50%;
        .request {
          padding-top: 10px;
          padding-bottom: 10px;
        }
      }
      .right-container {
        overflow: auto;
        width: 50%;
        border: 5px solid #ddd;
        text-align: left;
        vertical-align: middle;
      }
    }
  }
</style>
