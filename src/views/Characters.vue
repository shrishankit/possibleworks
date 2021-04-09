<template>
  <div>
    <v-card
      style="overflow-y: scroll;
    height: 87vh;"
    >
      <v-list>
        <v-list-item-group active-class="pink--text" multiple>
          <div v-for="(item, index) in characters.results" :key="item.id">
            <v-list-item :key="item.id">
              <template v-slot:default="{ active }">
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>

                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="'Species: ' + item.species"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <v-list-item-action-text v-text="item.status"></v-list-item-action-text>
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
              v-if="index < characters.results.length - 1"
              :key="index"
            ></v-divider>
          </div>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>

import gql from "graphql-tag";
import moment from "moment";


export default {
  data() {
    return {
      characters: {},
    };
  },
  components: {},
  apollo: {
    characters: gql`
      query {
        characters {
          info {
            count
          }
          results {
            id
            name
            species
            status
          }
        }
      }
    `,
  },
  mounted() {
    // var parsedobj = JSON.parse(JSON.stringify(this.episodes))
    console.log("All Character",this.characters.results);
  },
  methods: {
    
  },
  computed: {
    
    /**
     * To formate date into DD/MM/YYYY
     */
    formatDate(date){
        if (date) {
             return moment(String(date)).format('DD/MM/YYYY hh:mm')
        }
    }
  },
};
</script>
