import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import bbearerToken from "../../utils/bbearerToken";
const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1'

const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCart: (_state, action) => action.payload,
    // addCart: (state, {payload}) => [...state, payload],
    addCart: (state, {payload}) => state.push(payload),
    delCart: (state, {payload}) => state.filter(prod => prod.id !== payload),
    updCart: (state, {payload}) => {
      const { id, quantity } = payload
      return state.map( prod => prod.id === id ? 
        {...prod, quantity} : prod
      )
    }
  },

})

export const { setCart, addCart, delCart, updCart } = cart.actions

export default cart.reducer

export const getCartProdsThunk = () => (dispatch) => {
  const url = `${urlBase}/cart`
  axios.get(url, bbearerToken())
    .then(res => {
      dispatch(setCart(res.data))
    })
    .catch(err  => console.error(err))
}

export const postProductsThunk = (data) => (dispatch) => {
  const url = `${urlBase}/cart`
  axios.post(url, data, bbearerToken())
    .then(res => {
      dispatch(addCart(res.data))
    })
    .catch(err => console.error(err))
}

export const deleteProductThunk = (id) => (dispatch) => {
  const url = `${urlBase}/cart/${id}`
  axios.delete(url, bbearerToken())
    .then(() => {
      console.log('delete success')
      dispatch(delCart(id))
    })
    .catch(err => console.error(err))
}

export const updateProductThunk = (id, data) => (dispatch) => {
  const url = `${urlBase}/cart/${id}`
  axios.put(url, data, bbearerToken())
    .then(res => {
      dispatch(updCart(res.data))
      console.log(res.data)})
    .catch(err => console.error(err))
}