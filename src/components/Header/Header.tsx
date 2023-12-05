import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<img src={logo} alt="Logo" className={styles.logo} />
		</header>
	);
};

export default Header;
