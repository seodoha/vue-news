import axios from "axios";

const config = {
    baseUrl: "https://api.hnpwa.com/v0/",
};

export const fetchNewsList = () => axios.get(`${config.baseUrl}news/1.json`);
export const fetchAskList = () => axios.get(`${config.baseUrl}ask/1.json`);
export const fetchJobsList = () => axios.get(`${config.baseUrl}jobs/1.json`);
export const fetchUserInfo = (userName) => axios.get(`${config.baseUrl}user/${userName}.json`);
export const fetchItemInfo = (id) => axios.get(`${config.baseUrl}item/${id}.json`);
