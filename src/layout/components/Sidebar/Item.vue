
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
            <v-list>
                <v-list-item v-for="route in permission_routes" :key="route.path" link :to="route.path">
                    <v-list-item-icon>
                        <v-icon color="primary">{{ route.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="primary--text">{{ route.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
</template>
<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    // if (icon) {
    //   if (icon.includes('el-icon')) {
    //     vnodes.push(<i class={[icon, 'sub-el-icon']} />)
    //   } else {
    //     vnodes.push(<svg-icon icon-class={icon}/>)
    //   }
    // }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>


