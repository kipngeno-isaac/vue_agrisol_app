<template>
  <form @submit.prevent="register()">
    <v-card>
      <v-card-title> Sign Up here </v-card-title>

      <v-card-text>
        <v-text-field
          outlined
          label="Full name"
          v-model="userData.name"
        ></v-text-field>

        <v-text-field
          outlined
          label="Email address"
          v-model="userData.email"
        ></v-text-field>

        <v-text-field
          outlined
          label="Password"
          type="password"
          v-model="userData.password"
        ></v-text-field>
      </v-card-text>

      <v-card-actions class="px-4 pb-5">
        <v-btn type="submit" color="blue" x-large block dark>
          Register User
        </v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    register() {
      // console.log(this.userData);
      axios
        .post(`http://localhost:3333/api/auth/register`, this.userData, {
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
    },
  },
};
</script>