<template>
  <div id="app">
    <v-card class="mx-auto overflow-hidden">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>Rick and Morty</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        style="height:100vh"
      >
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <router-view />
    </v-card>
    <v-bottom-navigation
     
      :background-color="color"
      dark
      shift
      style="position:absolute;"
    >
      <v-btn>
       
        <router-link to="/"> <span test >Episodes</span></router-link>
        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn>
        
        <router-link to="/characters"> <span>Character</span></router-link>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn>
        <span>Book</span>

        <v-icon>mdi-book</v-icon>
      </v-btn>

    
    </v-bottom-navigation>
  </div>
</template>
<script>
export default {
  computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
  data: () => ({
    value: 1,
    drawer: false,
    group: null,
    titles : {
      first : "Episodes",
      Second : "Character"
    }
  }),
};
</script>
<style></style>
