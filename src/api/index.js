import axios from "axios";

const PRIVATBANK_URL =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

const api = {
  getExchangeRates: () => {
    return axios.get(
      `https://api.allorigins.win/raw?url=${encodeURIComponent(PRIVATBANK_URL)}`
    );
  },
};

export default api;
