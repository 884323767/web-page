<template>
    <div class="login">
        <h1>I am a login page.</h1>
        <div class="field-container">
            <div class="field top">
                 <h3>Welcome back.</h3>
            </div>
            <div class="field">
                  <p>Email</p>
                  <input placeholder="输入文本" type="text">
                </div>
            <div class="field">
                <p>Password</p>
                <div class="ui left icon input">
                  <i class="lock icon"></i>
                  <input type="password">
                </div>
              </div>
            <div class="ui button">Log in</div>
            <div class="ui teal button">Sign Up</div>
        </div>
    <div>
</template>

<script>

export default {
    components: {

    },
    route: {
        data(transition) {

        }
    },
    data() {
        return {
            action: "登录",
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
        }
    },
    // ready() {

    // }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login{
    height: 100%;
    width: 500px;
    margin: 0 auto;
    .top{
        background: #354355;
        color: #ffffff;
        padding-top: 3.5rem;
        padding-bottom: 3.5rem;
        text-align: center
    }
}
</style>
