import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import axios from 'axios'
import * as api from '../config.js'
import { productsReducer } from '../features/products/products-slice'
import { categoriesReducer } from '../features/categories/categories-slice.js'



export const store = configureStore({
	reducer: {
		products: productsReducer,
		categories: categoriesReducer,
	},
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {
					client: axios,
					api,
				},
			},
			serializableCheck: false,
		}),
})
