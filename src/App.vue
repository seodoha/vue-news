<template>
    <div id="app">
        <Toolbar></Toolbar>
        <Transition name="fade">
            <router-view></router-view>
        </Transition>
        <Spinner :loading="loadingStatus"></Spinner>
    </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus";

export default {
    components: {
        Toolbar,
        Spinner,
    },
    data() {
        return {
            loadingStatus: false,
        };
    },
    methods: {
        startSpinner() {
            this.loadingStatus = true;
        },
        endSpinner() {
            this.loadingStatus = false;
        },
    },
    created() {
        bus.$on("start:spinner", this.startSpinner);
        bus.$on("end:spinner", this.endSpinner);
    },
    beforeDestroy() {
        bus.$off("start:spinner", this.startSpinner);
        bus.$off("end:spinner", this.endSpinner);
    },
};
</script>

<style>
body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
a {
    color: #34495e;
    text-decoration: none;
}
a:hover {
    color: #42b883;
    text-decoration: underline;
}
a.router-link-exact-active {
    text-decoration: underline;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
