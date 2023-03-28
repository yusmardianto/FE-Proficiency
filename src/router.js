import Vue from "vue";
import Router from "vue-router"

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [{
        path: "",
        component: () => import("./pages/Landing.vue"),
        children: [{
            path: "/home",
            name: "home",
            component: () => import("./pages/Home.vue"),
        }]
    }]
})

export default router;