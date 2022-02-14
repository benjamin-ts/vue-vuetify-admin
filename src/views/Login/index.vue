<template>
<div id="app">
  <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }" :dark="darkTheme" id="inspire">
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" light tag="section">
            <v-card-title>
                <h3>
                  {{ platformName }}
                </h3>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>Sign in with your username and password:</p>
              <v-form ref="loginForm" v-model="valid" autocomplete="on" lazy-validation>
                <v-text-field
                              outline
                              ref="username"
                              :counter="loginRules.username[0].counter"
                              :rules="[loginRules.username[0].required]"
                              placeholder="Username"
                              label="Username"
                              type="text"
                              tabindex="1"
                              autocomplete="on"
                              v-model="loginForm.username"></v-text-field>
                <v-text-field
                              outline
                              hide-details
                              ref="password"
                              :rules="[loginRules.password[0].required]"
                              placeholder="Password"
                              label="Password"
                              type="Password"
                              tabindex="2"
                              autocomplete="on"
                              v-model="loginForm.password"
                              @keyup.native="checkCapslock"
                              @blur="capsTooltip = false"
                              @keyup.enter.native="handleLogin"></v-text-field>
                  <v-container></v-container>
              </v-form>
            </v-card-text>

            <v-divider></v-divider>
            <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
              <v-btn color="info">
                Forgot password?
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="info" :large="$vuetify.breakpoint.smAndUp" @click.native.prevent="handleLogin">
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import SocialSign from './components/SocialSignin'

export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [{ required: v => !!v || "username is required" ,counter:"10"}],
        password: [{ required: v => !!v ,counter:"10"}]
      },
      darkTheme: true,
      valid:true,
      platformName: 'Login Form',
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
methods:{
  checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      // this.$refs.loginForm.validate(valid => {
      //   console.log(valid)
      //   if (valid) {
      //     this.loading = true
      //     this.$store.dispatch('/login', this.loginForm)
      //       .then(() => {
      //         this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
      //         this.loading = false
      //       })
      //       .catch(() => {
      //         this.loading = false
      //       })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
      if(this.$refs.loginForm.validate()){
        this.loading = true
        this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
            this.loading = false
          })
          .catch(() => {
            this.loading = false
          })
      }else {
        console.log('error submit!!')
        return false
      }
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
},
mounted(){
  // console.log(this.$refs.loginForm.validate);
      if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
}
}
</script>