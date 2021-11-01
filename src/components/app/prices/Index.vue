<template>
  <v-card flat>
    <v-card-title>
      Market Prices
      <v-spacer></v-spacer>
    </v-card-title>

    <v-card-text>
      <v-card outlined>
        <v-card-text>
          <!-- {{ price }} -->
          <v-data-table
            :headers="headers"
            :items="desserts"
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
      prices: [],
      price: {},
      headers: [
        {
          text: "Produce",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "January", value: "january" },
        { text: "February", value: "february" },
        { text: "March", value: "march" },
        { text: "April", value: "april" },
        { text: "May", value: "may" },
      ],
      desserts: [
        {
          name: "maize",
          january: 159,
          february: 6.0,
          march: 24,
          april: 4.0,
          may: "1%",
        },
        {
          name: "maize",
          january: 159,
          february: 6.0,
          march: 24,
          april: 4.0,
          may: "1%",
        },
        {
          name: "maize",
          january: 159,
          february: 6.0,
          march: 24,
          april: 4.0,
          may: "1%",
        },
        {
          name: "maize",
          january: 159,
          february: 6.0,
          march: 24,
          april: 4.0,
          may: "1%",
        },{
          name: "maize",
          january: 159,
          february: 6.0,
          march: 24,
          april: 4.0,
          may: "1%",
        },
      ],
    };
  },

  computed: {},

  methods: {},

  mounted() {
    axios.get(`http://localhost:3333/api/prices`).then((response) => {
      console.log(response.data);
      if (response.status) {
        this.prices = response.data.data;
        this.price = response.data.data[0];
      }
    });
  },
};
</script>