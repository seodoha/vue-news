<template>
    <div>
        <ul class="news-list">
            <li v-for="item in listItems" :key="item.id" class="post">
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                <div>
                    <p class="news-title">
                        <template v-if="item.domain">
                            <a :href="item.url">
                                {{ item.title }}
                            </a>
                        </template>
                        <template v-else>
                            <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <router-link class="link-text" v-if="item.user" :to="`/user/${item.user}`">{{ item.user }}</router-link>
                        <a v-else :href="item.url">{{ item.domain }}</a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        listItems() {
            return this.$store.state.list;
        },
    },
};
</script>

<style scoped>
.news-list {
    margin: 0;
    padding: 0;
}
.post {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    list-style: none;
}
.points {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 80px;
    height: 60px;
    color: #42b883;
}
.news-title {
    margin: 0;
}
.link-text {
    color: #828282;
}
</style>
