<template>
  <v-navigation-drawer 
    v-model="sidebar.open" 
    app
    floating
    :permanent="sidebar.open"
    :mini-variant.sync="toggleMini"
    >
    <v-list color="primary" dark>
      <v-list-item>
          <v-list-item-content>
              <v-list-item-title>
                  <h3 class="font-weight-thin">Vuetify Dashboard</h3>
              </v-list-item-title>
          </v-list-item-content>
      </v-list-item>
    </v-list>
    <siderbarItem v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
// import Logo from './Logo'
import SiderbarItem from './SiderbarItem.vue'

export default {
  components: {  SiderbarItem },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar',
      'Mini'
    ]),
    toggleMini() {
      return (this.$vuetify.breakpoint.smAndDown) || this.Mini
    }
    // activeMenu() {
    //   const route = this.$route
    //   const { meta, path } = route
    //   // if set path, the sidebar will highlight the path you set
    //   if (meta.activeMenu) {
    //     return meta.activeMenu
    //   }
    //   return path
    // },
    // showLogo() {
    //   return this.$store.state.settings.sidebarLogo
    // },
    // variables() {
    //   return variables
    // },
    // isCollapse() {
    //   return !this.sidebar.opened
    // }
  }
}
</script>
