import { configureStore } from '@reduxjs/toolkit'
import loader from './slice/loader.slice'
import product from './slice/product.slice'
import dark from './slice/dark.slice'
export default configureStore ({
    reducer: {
        loader,
        product,
        dark
    }
})