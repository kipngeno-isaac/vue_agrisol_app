<template>
  <v-app>
    <v-container fluid class="__app-loading app-content pa-0" ref="application">
      <router-view></router-view>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "App",
};
</script>
