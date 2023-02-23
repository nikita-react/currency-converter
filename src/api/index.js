const PRIVATBANK_URL =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

const api = {
  getExchangeRates: () => {
    return fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(PRIVATBANK_URL)}`
    ).then((response) => response.json());
  },
};

export default api;
