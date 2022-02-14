
<template>
  <div 
    v-if="!item.hidden"
  >
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <v-card
        class="mx-auto"
        max-width="500"
      >
        <v-list>
          <v-list-item
            :key="item.name"
            :to="resolvePath(onlyOneChild.path)"
          >
            <v-list-item-icon>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-title>{{item.name}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </template>
    <v-card
      class="mx-auto"
      width="300"
      outlined
      elevation="0"
      v-else
    >
      <v-list outline>
        <v-list-group
          :value="false"
          prepend-icon="mdi-account-circle"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
          </template>
          <siderbarItem
            v-for="child in item.children"
            :key="child.path"
            :is-nest="true"
            :item="child"
            :base-path="resolvePath(child.path)"
            class="nest-menu"
          />
        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'

export default {
  name: 'SiderbarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null
    return {
      model:1,
    }
  },
  mounted() {
    // console.log((this.item.meta&&this.item.meta.icon))
    // console.log(this.onlyOneChild)

    // console.log(this.item.children)
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      // all routes
      // console.log(path.resolve(this.basePath, routePath))
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
<style scoped>
</style>