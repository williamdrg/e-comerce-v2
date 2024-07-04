import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import bbearerToken from "../../utils/bbearerToken";
const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1'

const purchases = createSlice({
  name: 'purchases',
  initialState: [],
  reducers: {
    setPurchases: (_state, {payload}) => payload,
    addPurchases: (state, {payload}) => [...state, payload]
  }
})

export const { setPurchases, addPurchases } = purchases.actions

export default purchases.reducer

export const getPurchasesThunk = () => (dispatch) => {
  const url = `${urlBase}/purchases`
  axios.get(url, bbearerToken())
    .then(res => dispatch(setPurchases(res.data)))
    .catch(err => console.error(err))
}

export const postPurchasesThunk = () => (dispatch) => {
  const url = `${urlBase}/purchases`
  axios.post(url, {}, bbearerToken())
    .then(res => dispatch(addPurchases(res.data)))
    .catch(err => console.error(err))
}