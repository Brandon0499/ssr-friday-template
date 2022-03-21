import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://sitegen-server-lfxtc2wa3a-as.a.run.app",
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
