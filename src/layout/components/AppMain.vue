<template>
  <v-main class="app-main" background-color="#1976d2">
    <v-container fluid >
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </v-container>
  </v-main>
</template>
    
<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  mounted(){
    // console.log(this.$store.state.tagsView.cachedViews)
    // console.log(this.$route.path)
  }
}
</script>
<style scoped>
  #container{
    background-color: darkgray;
  }
</style>