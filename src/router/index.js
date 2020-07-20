import Vue from "vue";
import Router from "vue-router";
import HelloWord from "./../components/HelloWorld"
import Login from './../components/Login.vue'
import Register from './../views/Register'


Vue.use(Router);


export default new Router({
  mode: "history",
  routes: [
    {
      path: "/hello",
      name: "HelloWord",
      component: HelloWord
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
  ]
});
