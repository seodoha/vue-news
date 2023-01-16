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
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
            .then((response) => {
                commit("SET_USER", response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_ITEM({ commit }, id) {
        return fetchItemInfo(id)
            .then((response) => {
                commit("SET_ITEM", response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    FETCH_LIST({ commit }, pageName) {
        return fetchList(pageName)
            .then((response) => {
                commit("SET_LIST", response.data);
                // return response;
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
