import Vue from "vue";
import VueApollo from "vue-apollo";
import VueRouter from "vue-router";

import apolloClient from "./vue-apollo";

import App from "./App.vue";

Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("./containers/Videos.vue")
    },
    {
      path: "/video/:id",
      components: require("./containers/Video.vue")
    }
  ]
});
new Vue({
  data: {
    canvas: null,
    x: 0,
    y: 0
  },
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");