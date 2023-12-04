// Product details
export interface ProductDetails {
	id: string;
	title: string;
	image: string;
	subtitle: string;
	brand: string;
	reviews: Review[];
	retailer: string;
	details: string[];
	tags: string[];
	sales: SalesData[];
}

// Review details
export interface Review {
	customer: string;
	review: string;
	score: number;
}

// Sales data
export interface SalesData {
	weekEnding: string;
	retailSales: number;
	wholesaleSales: number;
	unitsSold: number;
	retailerMargin: number;
}

// The shape of the application's state
export interface AppState {
	productDetails: ProductDetails;
}
