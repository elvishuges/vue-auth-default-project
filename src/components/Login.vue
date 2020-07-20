<template>
  <div>
      oi
  </div>
</template>

<script>
import { AUTH_REQUEST } from "./../store/actions/auth";

export default {
  name: "login",
  data() {
    return {
      username: "dogo",
      password: "dogy"
    };
  },
  methods: {
    login: function() {
      const { username, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>
<style>

</style>