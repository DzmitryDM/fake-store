import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

//Thunk
export const loadProducts = createAsyncThunk(
	'@@products/load-products',
	async (_, { extra: { client, api }, rejectWithValue }) => {
		try {
			const res = await client.get(api.ALL_PRODUCTS)
			return res
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)


//Slice
const initialState = {
	status: 'idle',
	error: null,
	list: [],
}

const productsSlice = createSlice({
	name: '@@products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(loadProducts.pending, state => {
			state.status = 'loading'
			state.error = null
		})
		builder.addCase(loadProducts.rejected, (state, { payload }) => {
			state.status = 'rejected'
			state.error = payload
		})
		builder.addCase(loadProducts.fulfilled, (state, { payload }) => {
			state.status = 'received'
			state.list = payload.data
		})
		
	},
})

export const productsReducer = productsSlice.reducer

//selectors
export const selectProducts = state =>
	state.products.list.filter((el, i) => i < 5)

export const selectStatusProducts = state => ({
	status: state.products.status,
	error: state.products.error,
	quantity: state.products.list.length,
})
