import axios from "axios";

const PRIVATBANK_URL =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

const api = {
  getExchangeRates: () => fetch(PRIVATBANK_URL).then((res) => res.json()),
};

export default api;
