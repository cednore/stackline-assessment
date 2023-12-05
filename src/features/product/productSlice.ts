import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDetails } from '../../types';

// Initial state for ProductDetails
const initialState: ProductDetails = {
	id: '',
	title: '',
	image: '',
	subtitle: '',
	brand: '',
	reviews: [],
	retailer: '',
	details: [],
	tags: [],
	sales: [],
};

export const fetchProductData = createAsyncThunk(
	'product/fetchProductData',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch(
				'https://api.myjson.online/v1/records/a3bc5eed-743d-46a9-902f-3eff98e9ffde'
			);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		// Reducer to set the product details
		setProductDetails(state, action: PayloadAction<ProductDetails>) {
			return action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProductData.fulfilled, (state, action) => {
			return { ...state, ...action.payload.data };
		});
	},
});

export const { setProductDetails } = productSlice.actions;

export default productSlice.reducer;
