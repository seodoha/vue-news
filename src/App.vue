<template>
    <div id="app">
        <Toolbar></Toolbar>
        <Transition name="fade">
            <router-view></router-view>
        </Transition>
    </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";
export default {
    components: {
        Toolbar,
    },
    methods: {},
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
