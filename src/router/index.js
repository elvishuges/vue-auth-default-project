import Vue from "vue";
import Router from "vue-router";
import store from "./../store";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/homePage");
};

// const ifAuthenticated = (to, from, next) => {
//   if (store.getters.isAuthenticated) {
//       next("/homePage");
//     return;
//   }
//   next("/login");
// };

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () => import('./../views/Login'),
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/register",
      name: "Register",
      component: () => import('./../views/Register'),
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: () => import('./../views/HomePage'),
    },
  ]
});
