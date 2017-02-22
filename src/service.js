var apiServer = "http://192.168.1.4:3000/";
var api = {
  testBaidu: "http://messtime.top/",
  register: apiServer + "api/EmailUsers",
  checkUser: apiServer + "api/EmailUsers/findOne?filter=:filter",
  login: apiServer + "api/Ssos/login"
}

export default {
    methods: {
      testBaidu() {
          // return Promise.resolve(mock.fxRate);
          return this.$http.get(api.testBaidu).then(res => {
              return res.body;
          }).catch(res => {
              return Promise.reject(res);
          });
      },
      register(data) {
        return this.$http.post(api.register, data).then(res => {
            return res.body;
        }).catch(res => {
            return Promise.reject(res);
        });
      },
      checkUser(data) {
          // return Promise.resolve(mock.fxRate);
          var url = api.checkUser.replace(':filter', data);
          return this.$http.get(url).then(res => {
              return res.body;
          }).catch(res => {
              return Promise.reject(res);
          });
      },
      login(data){
        return this.$http.post(api.login, data).then(res => {
            return res.body;
        }).catch(res => {
            return Promise.reject(res);
        });
      }
    }
}
