<template>
  <v-card flat>
    <v-card-title>
      Produce
      <v-spacer></v-spacer>
    </v-card-title>

    <v-card-text>
      <v-card outlined>
        <v-card-text>
          <!-- {{ produce }} -->
          <v-data-table
            :headers="headers"
            :items="produce"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  components: {},

  data() {
    return {
      produce: [],
      headers: [
        {
          text: "Produce",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Source", value: "crop.name" },
        { text: "Unit of measure", value: "unit" },
        { text: "Description", value: "description" },
        { text: "Date added", value: "created_at" },
      ],
    };
  },

  computed: {},

  methods: {},

  mounted() {
    axios.get(`http://localhost:3333/api/produce`).then((response) => {
      console.log(response.data);
      if (response.status) {
        this.produce = response.data.data;
      }
    });
  },
};
</script>