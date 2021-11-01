<template>
  <div>
    <v-card flat>
      <v-card-title>
        Crops
        <v-spacer></v-spacer>
      </v-card-title>
    </v-card>
    <div v-for="crop in crops" :key="crop.id">
      <v-card class="mx-auto" max-width="80%">
        <v-img
          :src="crop.links"
          height="200px"
        ></v-img>
        <v-card-title> {{ crop.name }} </v-card-title>

        <v-card-subtitle> {{ crop.description }} </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text> Explore </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},

  data() {
    return {
      crops: [],
      show: false,
    };
  },

  computed: {},

  methods: {},

  mounted() {
    axios.get(`http://localhost:3333/api/crops`).then((response) => {
      console.log(response.data);
      if (response.status) {
        this.crops = response.data.data;
      }
    });
  },
};
</script>