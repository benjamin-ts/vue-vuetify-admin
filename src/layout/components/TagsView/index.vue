<template>
<div id="tags-view-container" class="tags-view-container">
    <router-link v-for="tag in visitedViews" :key="tag.path" :to="tag.path"></router-link>
</div>
</template>
<script>
export default {
    data:()=>({

    }),
    computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    },
    routes() {
      return this.$store.state.permission.routes
    }
  },
  // mounted(){
  //     console.log(this.$store.state.tagsView.visitedViews)
  // }
}
</script>