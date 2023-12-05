import React from 'react';
import styles from './ProductReview.module.css';
import { useAppSelector } from '../../app/hooks';

const ProductReview: React.FC = () => {
	const product = useAppSelector((state) => state.product);

	return (
		<div className={styles.productReview}>
			<div className={styles.metaData}>
				<img
					src={product.image}
					alt={product.title}
					className={styles.productImage}
				/>
				<h2 className={styles.productTitle}>{product.title}</h2>
				<p className={styles.productSubtitle}>{product.subtitle}</p>
			</div>
			<div className={styles.tags}>
				{product.tags.map((tag) => (
					<span key={tag} className={styles.tag}>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default ProductReview;
