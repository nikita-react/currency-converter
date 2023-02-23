import axios from "axios";

const proxyUrl = "https://thingproxy.freeboard.io/fetch/";
const PRIVATBANK_URL =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
const api = {
  getExchangeRates: () => {
    return axios.get(proxyUrl + PRIVATBANK_URL);
  },
};

export default api;
