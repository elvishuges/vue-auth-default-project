<template>
  <v-app>
    <v-content>
     <router-view />
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import { AUTH_LOGOUT } from "./store/actions/auth";
export default {
  name: 'App',

  components: {

  },

  data: () => ({
    iconText: ''
  }),
  methods: {
    logout() {
         this.$store.dispatch(AUTH_LOGOUT).then(() => {
           this.$router.push("/login");
         });
    }
  },
  mounted () {
  },
};
</script>
