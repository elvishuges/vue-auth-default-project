<template>
<v-main>
  <v-app-bar
      app
      color="blue-grey darken-1"
      dark
    >
      <v-spacer></v-spacer>
      <v-btn
        target="_blank"
        text
        @click="logout()"
      >
        <span class="mr-2">Sobre</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

  <v-container fluid>

    <v-sheet class="mx-auto pa-0" elevation="0">
      <v-slide-group v-model="model" class="pa-0 ma-0" show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot:default="{ active, toggle }">
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="300"
            width="300"
            @click="toggle"
          >
          <v-img
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
          </v-img>
         <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
         <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
         </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <v-expand-transition>
        <v-sheet v-if="model != null" color="grey lighten-4" height="200" tile>
          <v-row class="fill-height" align="center" justify="center">
            <h3 class="title">Selected {{ model }}</h3>
          </v-row>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </v-container>
  </v-main>
</template>
<script>
import { AUTH_LOGOUT } from "./../store/actions/auth";
export default {
  data() {
    return {
      key: "value",
      model: null
    };
  },
  methods: {
    logout() {
        this.$store.dispatch(AUTH_LOGOUT).then(() => {
        this.$router.push("/login");
    })
    }

  },
  computed: {
    compunted() {
      return this.data;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>