import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo } from "../api/index";

export default {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
            .then(({ data }) => {
                commit("SET_NEWS", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_ASKS({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit("SET_ASKS", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                commit("SET_JOBS", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
            .then(({ data }) => {
                commit("SET_USER", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_ITEM({ commit }, id) {
        fetchItemInfo(id)
            .then(({ data }) => {
                commit("SET_ITEM", data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
