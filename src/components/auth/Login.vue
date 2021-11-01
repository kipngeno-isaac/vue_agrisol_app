<template>
  <form @submit.prevent="login()">
    <v-card>
      <v-card-title>
        Login to AgriSol
      </v-card-title>

      <v-card-text>
        <v-text-field
          outlined
          persistent-hint
          label="Email address"
          v-model="userData.email"
        ></v-text-field>

        <v-text-field
          outlined
          persistent-hint
          type="password"
          label="Password"
          v-model="userData.password"
        ></v-text-field>
      </v-card-text>

      <v-card-actions class="px-4 pb-5">
        <v-btn
          type="submit"
          color="blue"
          x-large
          block
          dark
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
        userData: {
        email: "",
        password: "",
      },
    }
  },

  computed: {

  },

  methods: {
    login () {

      axios
        .post(`http://localhost:3333/api/auth/login`, this.userData, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then(({ data }) => {
          console.log(data);
          if (data.status) {
            localStorage.setItem("token", data.token.token);
            this.$router.push({ name: "crops" });
          }
        });
    }
  }
}
</script>