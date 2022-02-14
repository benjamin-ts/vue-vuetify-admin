<template>
    <v-app class="app-wrapper">
      <NavBar />
      <TagsBar />
      <AppMain />
      <sidebar class="sidebar-container" />
    </v-app>
</template>
<script>
import AppMain from './components/AppMain.vue'
import NavBar from './components/NavBar.vue'
import {Sidebar} from './components'
import TagsBar from './components/TagsBar.vue'
// import {TagsView} from './components/TagsView/index.vue'

export default {
  name: 'Layout',
  components: {
    NavBar,
    Sidebar,
    TagsBar,
    AppMain,
    // TagsView
  },
}
</script>