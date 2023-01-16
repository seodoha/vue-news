import ListView from "./ListView.vue";
import bus from "../utils/bus";

const createListView = (name) => {
    return {
        name,
        created() {
            bus.$emit("start:spinner");
            this.$store
                .dispatch("FETCH_LIST", this.$route.name)
                .then(() => {
                    bus.$emit("end:spinner");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        render(createElement) {
            return createElement(ListView);
        },
    };
};

export default createListView;
