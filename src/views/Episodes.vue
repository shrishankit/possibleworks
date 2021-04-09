<template>
  <div>
    <v-card
      style="overflow-y: scroll;
        height: 87vh;"
    >
      <div v-if="!fullprofile">
        <v-list>
          <v-list-item-group active-class="pink--text">
            <div v-for="(item, index) in episodes.results" :key="item.id">
              <v-list-item :key="item.id">
                <template v-slot:default="{ active }">
                  <v-list-item-content v-on:click="getEepisodeById(item)">
                    <v-list-item-title v-text="item.name"></v-list-item-title>

                    <v-list-item-subtitle
                      class="text--primary"
                      v-text="'Create On : ' + item.created"
                    ></v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-icon v-if="!active" color="grey lighten-1">
                      mdi-star-outline
                    </v-icon>

                    <v-icon v-else color="yellow darken-3">
                      mdi-star
                    </v-icon>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider
                v-if="index < episodes.results.length - 1"
                :key="index"
              ></v-divider>
            </div>
          </v-list-item-group>
        </v-list>
      </div>
      <div align="center" v-else>
        <v-card class="mx-auto" color="#26c6da" dark max-width="400">
          <v-card-title>
            <v-icon v-on:click="toggleView()" large left>
              mdi-arrow-left
            </v-icon>
            <span class="title font-weight-light"
              >{{ episodesDetails.name }} - {{ episodesDetails.episode }}</span
            >
          </v-card-title>

          <v-card-text align="center" class="headline font-weight-bold">
            Aired On :- {{ episodesDetails.air_date }}
          </v-card-text>

          
        </v-card>
      </div>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
import gql from "graphql-tag";
import moment from "moment";

export default {
  name: "Home",
  data() {
    return {
      episodes: {},
      fullprofile: false,
      episodesDetails: null,
    };
  },
  components: {},
  apollo: {
    episodes: gql`
      query {
        episodes {
          info {
            count
          }
          results {
            id
            name
            created
          }
        }
      }
    `,
  },
  mounted() {
    //    var parsedobj = JSON.parse(JSON.stringify(this.episodes))
    console.log("All Episodes", this.episodes.results);
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    },
    getEepisodeById: async function(item) {
      const result = await this.$apollo.query({
        // Query
        query: gql`
          query($ids: [ID!]!) {
            episodesByIds(ids: $ids) {
              id
              name
              episode
              air_date
              created
            }
          }
        `,
        // Parameters
        variables: {
          ids: item.id,
        },
      });
      if (result) {
        this.fullprofile = true;
        this.episodesDetails = result.data.episodesByIds[0];
      }
      console.log("Episode", result);
    },
    toggleView() {
      this.fullprofile = !this.fullprofile;
    },
  },
  computed: {
    title() {
      return this.tabs[this.activeIndex].label;
    },
    /**
     * To formate date into DD/MM/YYYY
     */
    formatDate(date) {
      if (date) {
        return moment(String(date)).format("DD/MM/YYYY hh:mm");
      }
    },
  },
};
</script>
