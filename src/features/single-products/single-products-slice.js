import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Thunk

export const loadCurrentProduct = createAsyncThunk(
	'@@products/load-current-product',
	async (id, { extra: { client, api } }) => {
		return client.get(api.singleProductById(id))
	}
)

//Slice
const initialState = {
	status: 'idle',
	error: null,
	product: {},
	currentImages:null
}

export const singleProductsSlice = createSlice({
name:'@@singleProducts',
initialState,
reducers:{
	setCurrentImages:(state,{payload})=>{
state.product.currentImages = payload 
	}
},
extraReducers:builder=>{
  builder.addCase(loadCurrentProduct.pending, (state) => {
    state.status = 'loading'
		state.error=null
	})
  builder.addCase(loadCurrentProduct.rejected, (state, { payload }) => {
    state.status = 'rejected'
		state.product = payload
	})
  builder.addCase(loadCurrentProduct.fulfilled, (state, { payload }) => {
    state.status = 'received'
		state.product = payload.data
	})
},
})

export const {setCurrentImages} =singleProductsSlice.actions
export const singleProductsReducer = singleProductsSlice.reducer

//Selectors
export const selectSingleProducts = state => state.singleProducts