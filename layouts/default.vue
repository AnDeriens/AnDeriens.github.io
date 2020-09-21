<template>
  <div>
    <v-app dark>
      <v-app-bar
        dense
        app
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-menu
          bottom
          left
        >
        </v-menu>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        height="100%"
        absolute
        temporary
        left
        class="pt-0"
      >
        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.anchor"
            class="brown lighten-4"
            :to="item.to"
            @click="drawer = false"
            nuxt
          >
            <v-list-item-icon>
              <v-icon>md-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.anchor }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-content>
        <v-container>
          <nuxt/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
<style lang="scss">
.title {
  background-color: $blue-sky-1;
  color: $white;
  text-shadow: 1px 1px 0 $dark-gray;
}
.v-list {
  padding-top: 0;
}
.list {
  display: flex;
}
.hidden {
  display: none;
}
</style>
<script>
export default {
  layout: 'default',
  data () {
    return {
      drawer: false,
      title: 'AnDeriens Portfolio',
      items: [
        {to: "/", anchor: "TOP"},
        {to: "/about", anchor: "about"},
        {to: "/profile", anchor: "profile"},
        {to: "/skill", anchor: "skill"},
        {to: "/educational_background", anchor: "education"},
        {to: "/work_history", anchor: "work"},
        {to: "/appendix", anchor: "link"},
      ]
    }
  }
}
</script>
