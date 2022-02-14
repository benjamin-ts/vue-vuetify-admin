<template>
        <v-app-bar app color="primary" dark elevation="0">
            <v-app-bar-nav-icon @click="toggleSideBar"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-btn @click="toggleTheme" color="primary" class="mr-2">{{buttonText}}</v-btn>
            <!-- <v-icon>mdi-account</v-icon> -->
            <v-menu
              top
              :close-on-content-click="closeOnContentClick"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-badge
                  bordered
                  bottom
                  color="deep-purple accent-4"
                  dot
                  offset-x="10"
                  offset-y="10"
                  overlap
                >
                  <v-avatar
                    size="40"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                  </v-avatar>
                </v-badge>
              </template>
              <v-list>
                <v-list-item 
                  link
                  href="/profile/index"
                >
                  <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>
                <v-list-item
                  link
                  href="/index"
                >
                  <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>
                <v-list-item
                  @click.native="SignOut"
                  link
                >
                  <v-list-item-title>Sign Out</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
        </v-app-bar>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  computed: {
    // ...mapGetters([
    //   'sidebar'
    // ]),
    buttonText() {
        return !this.$vuetify.theme.dark ? 'Go Dark' : 'Go Light'
    }
  },
  data: () => ({
        sidebarMenu: true,
        toggleMini: false,
        dark:true,
        closeOnContentClick:true,
  }),
  methods:{
    ...mapActions([
      'toggleSideBar'
    ]),
    toggleTheme() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;      
    },
    async SignOut() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>