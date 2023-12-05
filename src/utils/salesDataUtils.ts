import { SalesData } from '../types';

export const getSalesDataByDay = (
	salesData: SalesData[]
): { labels: string[]; retailSales: number[]; wholesaleSales: number[] } => {
	const labels = salesData.map((data) => data.weekEnding);
	const retailSales = salesData.map((data) => data.retailSales);
	const wholesaleSales = salesData.map((data) => data.wholesaleSales);

	return { labels, retailSales, wholesaleSales };
};
