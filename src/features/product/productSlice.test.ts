import productReducer, { setProductDetails } from './productSlice';

describe('product reducer', () => {
	const initialState = {
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
		loading: false,
	};

	it('should handle initial state', () => {
		expect(productReducer(undefined, { type: 'unknown' })).toEqual({
			...initialState,
			loading: false,
		});
	});

	it('should handle setProductDetails', () => {
		const actual = productReducer(
			initialState,
			setProductDetails({
				id: '123',
				title: 'Test Product',
				image: '',
				subtitle: '',
				brand: '',
				reviews: [],
				retailer: '',
				details: [],
				tags: [],
				sales: [],
			})
		);
		expect(actual.id).toEqual('123');
		expect(actual.title).toEqual('Test Product');
	});
});
