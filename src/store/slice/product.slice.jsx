import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
import {isLoading} from './loader.slice'

export const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        setProduct: (state, action) => action.payload
        
    }
})

export const {setProduct} = productSlice.actions
export default productSlice.reducer

export const getProductsThunk = () => dispatch => {
    dispatch( isLoading(true) )
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products`)
    .then(product => dispatch( setProduct(product.data) ) )
    .catch(console.error)
    .finally(() => dispatch( isLoading(false) ))
}

export const getProductsXCategoryThunk = (idcategory) => dispatch => {
    dispatch( isLoading(true) )
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${idCategory}`)
    .then(product => dispatch( setProduct(product.data) ) )
    .catch(console.error)
    .finally(() => dispatch( isLoading(false) ))
}

export const getProductsXNameThunk = (product) => dispatch => {
    dispatch( isLoading(true) )
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${product}`)
    .then(product => dispatch( setProduct(product.data) ) )
    .catch(console.error)
    .finally(() => dispatch( isLoading(false) ))
}



