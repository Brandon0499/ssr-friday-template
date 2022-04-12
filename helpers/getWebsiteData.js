import axios from "axios";
import { ENDPOINT } from "./environment";
const apiClient = axios.create({
  baseURL: ENDPOINT,
  withCredentials: true,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    Authorization: "Bearer muRDsCDPdcMgrpWRuW6Px03tvqgQwIF7ncovEKbWTV4=",
  },
});

const getClientData = ({ websiteId }) =>
  apiClient.get(`/website/getWebsiteData/${websiteId}/`);

export default getClientData;
