import api from "../Common/api";

const getMenu = () => api.get("/api/getMenu/");
const getNews = () => api.get("/api/getBBCNews/");
const getFlowPodCast = () => api.get("/api/getFlowPodCast/");
const getProduct = (prodID: string) => api.get("/api/getProdDetail/"+prodID);

export default {
    getMenu,
    getNews,
    getFlowPodCast,
    getProduct
};