import 'chartjs-adapter-date-fns';

import { Chart as ChartJS, ChartOptions, registerables } from 'chart.js';
import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { useAppSelector } from '../../app/hooks';
import { getSalesDataByDay } from '../../utils/salesDataUtils';
import styles from './RetailSales.module.css';

ChartJS.register(...registerables);

const RetailSales: React.FC = () => {
	const salesData = useAppSelector((state) => state.product.sales);

	// Use useMemo to avoid recalculating on every render unless salesData changes
	const { labels, retailSales, wholesaleSales } = useMemo(
		() => getSalesDataByDay(salesData),
		[salesData]
	);

	const chartData = {
		labels: labels,
		datasets: [
			{
				label: 'Retail Sales',
				data: retailSales,
				borderColor: 'rgba(0, 123, 255, 1)',
				backgroundColor: 'rgba(0, 123, 255, 0.5)',
				tension: 0.4,
			},
			{
				label: 'Wholesale Sales',
				data: wholesaleSales,
				borderColor: 'rgba(108, 117, 125, 1)',
				backgroundColor: 'rgba(108, 117, 125, 0.5)',
				tension: 0.4,
			},
		],
	};

	const options: ChartOptions<'line'> = {
		elements: {
			point: {
				radius: 3,
			},
		},
		scales: {
			x: {
				offset: true,
				border: {
					display: false,
				},
				grid: {
					display: false,
				},
				type: 'time',
				time: {
					unit: 'month',
					displayFormats: {
						month: 'MMM',
					},
					tooltipFormat: 'MMM d, yyyy',
				},
				title: {
					display: false,
				},
			},
			y: {
				offset: true,
				display: false,
				grid: {
					display: false,
				},
				beginAtZero: true,
			},
		},
		interaction: {
			intersect: false,
			mode: 'nearest',
		},
		maintainAspectRatio: false,
	};

	return (
		<div className={styles.retailSales}>
			<Line options={options} data={chartData} />
		</div>
	);
};

export default RetailSales;
