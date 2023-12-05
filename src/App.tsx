import React, { useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import ProductReview from './components/ProductReview/ProductReview';
import RetailSales from './components/RetailSales/RetailSales';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { useDispatch } from 'react-redux';
import { fetchProductData } from './features/product/productSlice';
import { AppDispatch } from './app/store';

const App: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchProductData());
	}, [dispatch]);
	return (
		<div className={styles.App}>
			<Header />
			<div className={styles.mainContainer}>
				<div className={styles.productOverviewSection}>
					<ProductReview />
				</div>
				<div className={styles.productDetailSection}>
					<RetailSales />
					<ProductDetails />
				</div>
			</div>
		</div>
	);
};

export default App;
