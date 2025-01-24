import styles from './Logo.module.css';

function Logo() {
	return (
		<a href="/" className={styles['logo']}>
			<img src="../../public/logo.svg" alt="logo kinopoisk" />
		</a>
	);
}

export default Logo;