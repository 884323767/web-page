<template>
  <div class="reset">
    <div class="head-container">
      <div class="head">
        <div  class="ui button logo">logo</div>
        <div class="label">Forgot Password</div>
      </div>
      <a href="#/login" class="ui inverted button">Exit</a>
    </div>
    <div class="reset-container">
      <h1>Forgot your password?</h1>
      <div class="detail">If you forgot your password, please enter the email address associated with your account to reset your password.</div>
      <div class="ui form">
        <p>Email</p>
        <input type="text" v-model="email">
      </div>
      <div class="button-container">
        <button class="ui blue button reset-button" :class="{'loading disabled': loading,'disabled': !formReady}" @click="sendEmail">Send reset email</button>
      </div>
    </div>
  </div>
</template>

<script>
var timer;
export default {
  components: {
  },
  data() {
    return {
      loading: false,
      email: ''
    }
  },
  computed: {
      accountValue(val) {
        console.log(val);
        return val;
      },
      formReady() {
          return this.email;
      }
  },
  methods: {
    sendEmail() {
      this.loading = true;
      // var data= null;
      // console.log(data);
      clearTimeout(timer);
      timer = setTimeout(()=>{
        this.loading = false;
        // this.checkUser(encodeURI(JSON.stringify(data))).then(res => {
        // }).catch(()=>{
        //   alert("发送失败");
        // }).finally(() => {
        //   this.loading = false;
        //   console.log('finally');
        // })
      },200);
    }
  },
  mounted() {
    // $('.ui.radio.checkbox').checkbox()
  }
}
</script>

<style lang="scss">
.reset{
  .head-container{
    width: 100%;
    padding: 2% 5%;
    display: flex;
    justify-content: space-between;
    background-color: #17406B;
    .head{
      display: flex;
      align-items: center;
      .label{
        padding-left: 20px;
        color: #90caf9;
      }
    }
  }
  .reset-container{
    position: relative;
    width: 50%;
    left: 20%;
    text-align: left;
    padding-top: 4.4rem;
    h1{
      font-size: 2rem;
      padding-bottom: 2.4rem;
    }
    .detail{
      font-size: 1.2rem;
      padding-bottom: 1.8rem;
    }
    .button-container {
      border-top:1px solid #ddd;
      margin-top: 3.4rem;
      padding-top: 2rem;
      text-align: right;
    }
  }
}
</style>
