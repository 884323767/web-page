// var apiServer = "http://192.168.1.4:3000/";
var apiServer = "https://139.224.233.25/";
var api = {
  testBaidu: "http://messtime.top/",
  register: apiServer + "api/EmailUsers",
  checkUser: apiServer + "api/EmailUsers/findOne?filter=:filter",
  login: apiServer + "api/Ssos/login",
  portfolioHistory: "https://test.aqumon.com/v1/user/0/account/0/portfolio/history",
  master: "https://test.aqumon.com/v1/user/0/account/master",
  preference: "https://test.aqumon.com/v1/user/0/account/0/preference",
  portfolio: "https://test.aqumon.com/v1/user/0/account/0/portfolio/",
  invtAccount: "https://test.aqumon.com/v1/user/0/account/invt-account",
  drift: "https://test.aqumon.com/v1/user/0/account/0/drift",
  detail: "https://test.aqumon.com/v1/user/0/account/0/",
  target: "https://test.aqumon.com/v1/user/0/account/0/target"
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
      },
      getPortfolioHistory() {
          // return Promise.resolve(mock.fxRate);
          return this.$http.get(api.portfolioHistory).then(res => {
              return res.body;
          }).catch(res => {
              return Promise.reject(res);
          });
      },
      getMaster() {
          // return Promise.resolve(mock.fxRate);
          return this.$http.get(api.master).then(res => {
              return res.body;
          }).catch(res => {
              return Promise.reject(res);
          });
      },
      getPreference() {
          // return Promise.resolve(mock.fxRate);
          return this.$http.get(api.preference).then(res => {
              return res.body;
          }).catch(res => {
              return Promise.reject(res);
          });
      },
      getPortfolio() {
          // return Promise.resolve(mock.fxRate);
          return this.$http.get(api.portfolio).then(res => {
              return res.body;
          }).catch(res => {
              return Promise.reject(res);
          });
      },
      getInvtAccount() {
          // return Promise.resolve(mock.fxRate);
          return this.$http.get(api.invtAccount).then(res => {
              return res.body;
          }).catch(res => {
              return Promise.reject(res);
          });
      },
      getDrift() {
          // return Promise.resolve(mock.fxRate);
          return this.$http.get(api.drift).then(res => {
              return res.body;
          }).catch(res => {
              return Promise.reject(res);
          });
      },
      getDetail() {
          // return Promise.resolve(mock.fxRate);
          return this.$http.get(api.detail).then(res => {
              return res.body;
          }).catch(res => {
              return Promise.reject(res);
          });
      },
      getTarget() {
          // return Promise.resolve(mock.fxRate);
          return this.$http.get(api.target).then(res => {
              return res.body;
          }).catch(res => {
              return Promise.reject(res);
          });
      }
    }
}
