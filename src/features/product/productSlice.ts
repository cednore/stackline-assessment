import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductDetails } from '../../types';

// Initial state is typed to ProductDetails interface
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

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		// Reducer to set the product details
		setProductDetails(state, action: PayloadAction<ProductDetails>) {
			return action.payload;
		},
	},
});

export const { setProductDetails } = productSlice.actions;

export default productSlice.reducer;
