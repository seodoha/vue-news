// import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo, fetchList } from "../api/index";
import { fetchUserInfo, fetchItemInfo, fetchList } from "../api/index";

export default {
    // FETCH_NEWS({ commit }) {
    //     return fetchNewsList()
    //         .then((response) => {
    //             commit("SET_NEWS", response.data);
    //             return response;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // },
    // FETCH_ASKS({ commit }) {
    //     return fetchAskList()
    //         .then((response) => {
    //             commit("SET_ASKS", response.data);
    //             return response;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // },
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then((response) => {
    //             commit("SET_JOBS", response.data);
    //             return response;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // },
    async FETCH_USER({ commit }, name) {
        try {
            const response = await fetchUserInfo(name);
            commit("SET_USER", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_ITEM({ commit }, id) {
        try {
            const response = await fetchItemInfo(id);
            commit("SET_ITEM", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_LIST({ commit }, pageName) {
        try {
            const response = await fetchList(pageName);
            commit("SET_LIST", response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
};
