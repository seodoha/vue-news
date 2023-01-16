import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
// import CreateListView from "../views/CreateListView";
import bus from "../utils/bus";
import { store } from "../store/index";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/news",
        },
        {
            path: "/news",
            name: "news",
            component: NewsView,
            // component: CreateListView("NewsView"),
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store
                    .dispatch("FETCH_LIST", to.name)
                    .then(() => next())
                    .catch((err) => {
                        console.log(err);
                    });
            },
        },
        {
            path: "/ask",
            name: "ask",
            component: AskView,
            // component: CreateListView("AskView"),
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store
                    .dispatch("FETCH_LIST", to.name)
                    .then(() => next())
                    .catch((err) => {
                        console.log(err);
                    });
            },
        },
        {
            path: "/jobs",
            name: "jobs",
            component: JobsView,
            // component: CreateListView("JobsView"),
            beforeEnter: (to, from, next) => {
                bus.$emit("start:spinner");
                store
                    .dispatch("FETCH_LIST", to.name)
                    .then(() => next())
                    .catch((err) => {
                        console.log(err);
                    });
            },
        },
        {
            path: "/item/:id",
            component: ItemView,
        },
        {
            path: "/user/:id",
            component: UserView,
        },
    ],
});
