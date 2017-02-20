<template>
    <div class="register">
        <h1>I am a register page.</h1>
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
<style lang="css">
.login{
    height: 100%;
    width: 500px;
}
</style>
