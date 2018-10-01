var Vue = require('vue')

var auth = {
  login(id, pass) {
    return ({
      userid: id,
      password: pass
    })
  }
}

module.exports = Vue.extend({
  template: "#login-template",
  data() {
    return {
      userid: '',
      password: ''
    }
  },
  methods: {
    login() {
      return auth.login(this.userid, this.password)
    }
  }
})