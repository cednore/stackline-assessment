import { SalesData } from '../types';

export const getSalesDataByDay = (
	salesData: SalesData[]
): {
	labels: string[];
	retailSales: number[];
	wholesaleSales: number[];
	maxSales: number;
	minSales: number;
} => {
	const labels = salesData.map((data) => data.weekEnding);
	const retailSales = salesData.map((data) => data.retailSales);
	const wholesaleSales = salesData.map((data) => data.wholesaleSales);
	const maxSales: number = Math.max(...retailSales, ...wholesaleSales);
	const minSales: number = Math.min(...retailSales, ...wholesaleSales);

	return { labels, retailSales, wholesaleSales, maxSales, minSales };
};
