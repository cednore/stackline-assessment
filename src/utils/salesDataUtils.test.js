import { getSalesDataByDay } from './salesDataUtils';

describe('getSalesDataByDay', () => {
	it('correctly processes sales data', () => {
		const salesData = [
			{ weekEnding: '2023-01-01', retailSales: 100, wholesaleSales: 200 },
			{ weekEnding: '2023-01-08', retailSales: 150, wholesaleSales: 250 },
		];

		const result = getSalesDataByDay(salesData);

		expect(result.labels).toEqual(['2023-01-01', '2023-01-08']);
		expect(result.retailSales).toEqual([100, 150]);
		expect(result.wholesaleSales).toEqual([200, 250]);
		expect(result.maxSales).toEqual(250); // The highest value in both retail and wholesale
		expect(result.minSales).toEqual(100); // The lowest value in both retail and wholesale
	});
});
