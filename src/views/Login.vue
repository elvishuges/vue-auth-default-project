/** * Created by vouill on 11/13/17. */

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
      >
        <span class="mr-2">Sobre</span>
        <v-icon>mdi-arrow-top-right-bold-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container fluid>
      <v-layout  align-center justify-center>
        <v-flex xs12 sm6 md4>
          <v-card elevation=3 shaped class="elevation-1">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Freends</v-card-title>
            </v-img>
            <v-card-text>
              <v-form >
                <v-text-field
                  prepend-icon="mdi-face"
                  name="username"
                  v-model="username"
                  label="Login"
                  type="text"
                  v-on:keyup.enter="login()"

                ></v-text-field>
                <v-text-field
                  v-model="password"
                  prepend-icon="mdi-lock"
                  name="password"
                  label="Senha"
                  type="password"
                  v-on:keyup.enter="login()"

                ></v-text-field>
              </v-form>
            </v-card-text>
              <v-card-actions>
                <v-btn @click="login()" block dark color="blue-grey" >Login</v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn dark block color="light-blue darken-4" >Register</v-btn>
              </v-card-actions>
          </v-card>
          <v-alert :value="alert" color="red">{{msg}}</v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>


<style>
.login {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
}
</style>

<script>
import { AUTH_REQUEST } from "./../store/actions/auth";

export default {
  name: "login",
  data() {
    return {
      username: "eve.holt@reqres.in",
      password: "cityslicka",
      loading:false,
      msg:"",
      alert:false
    };
  },
  methods: {
    login: function() {
      const { username, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push("/homePage");
      });
    }
  }
};
</script>

