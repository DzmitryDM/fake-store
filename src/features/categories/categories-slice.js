import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const loadAllCategories = createAsyncThunk(
	'@@categories/load-all-categories',
	async (_, { extra: { client, api },rejectWithValue }) => {
		try {
			const data =  client.get(api.ALL_CATEGORIES)
			return data
} catch (error) {
	return rejectWithValue(error.message)
}	
}

)

export const loadProductsByCategories = createAsyncThunk(
	'@@categories/load-products-by-categories',
	async (id, { extra: { client, api }, rejectWithValue }) => {
		try {
			const res  =  await client.get(api.categoriesById(id))
     return res		
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const initialState = {
	status: 'idle',
	error: null,
	categoriesAll: [],
	productsByCategories: [],
}

const categoriesSlice = createSlice({
	name: '@@categories',
	initialState,
	reducers: {
		clearCategories:state =>initialState
	},
	extraReducers: builder => {
		builder.addCase(loadAllCategories.pending, (state) => {
			state.status = 'loading'
			state.error = null
		})
		builder.addCase(loadAllCategories.rejected, (state, { payload }) => {
			state.status = 'rejected'
			state.error = payload
		})
		builder.addCase(loadAllCategories.fulfilled, (state, { payload }) => {
			state.status = 'received'
			state.categoriesAll = payload.data
		})
		builder.addCase(loadProductsByCategories.pending, state => {
			state.status = 'loading'
			state.error = null
		})
		builder.addCase(loadProductsByCategories.rejected, (state, { payload }) => {
			state.status = 'rejected'
			state.error = payload
		})
		builder.addCase(
			loadProductsByCategories.fulfilled,
			(state, { payload }) => {
				state.status = 'received'
				state.productsByCategories = payload.data
			}
		)
	},
})

export const {clearCategories} =categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer

//selectors
export const selectCategories = state => state.categories

export const selectStatusProductsByCategories = state => ({
	status: state.categories.status,
	error: state.categories.error,
	quantity: state.categories.productsByCategories.length,
})