<template>
  <div id="app">
    <v-card class="overflow-hidden">
      <v-app-bar
        color="#fcb69f"
        dark
        shrink-on-scroll
        src="./assets/960x0.png"
        scroll-target="#scrolling-techniques-2"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
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
        <v-app-bar-title>Rick and Morty</v-app-bar-title>

        <v-spacer></v-spacer>

        

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="100vh"
      >
        <!-- <router-view /> -->
        <v-container style="height: 1000px;">
          <router-view />
        </v-container>
      </v-sheet>
    </v-card>

    <v-bottom-navigation
      :background-color="color"
      dark
      shift
      style="position:absolute;"
    >
      <v-btn @click="changeRouteTo('/')">
        <span test>Episodes</span>
        <v-icon>mdi-television-play</v-icon>
      </v-btn>

      <v-btn @click="changeRouteTo('/characters')">
        <span>Character</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>

      <v-btn @click="changeRouteTo('/profile')">
        <span>Book</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script>
export default {
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
  },
  data: () => ({
    value: 1,
    drawer: false,
    group: null,
    titles: {
      first: "Episodes",
      Second: "Character",
    },
  }),
  methods: {
    changeRouteTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style></style>
