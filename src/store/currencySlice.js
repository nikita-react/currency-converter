import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getCurrency = createAsyncThunk(
  "currency/getCurrency",
  async (_, { rejectWithValue }) => {
    try {
      const requestCount = JSON.parse(localStorage.getItem("request-counter"));
      if (requestCount >= 5) {
        return rejectWithValue({ status: 404, message: "Not Found" });
      }

      const res = await api.getExchangeRates();

      if (!res.status) {
        throw new Error("Server Error!");
      }

      if (res.status === 200) {
        localStorage.setItem(
          "request-counter",
          JSON.stringify(1 + requestCount)
        );
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    currencyData: [],
    status: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getCurrency.pending]: (state) => {
      state.status = "loading";
      state.error = null;
      state.loading = true;
    },
    [getCurrency.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.currencyData = action.payload;
      state.loading = false;
    },
    [getCurrency.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default currencySlice.reducer;
