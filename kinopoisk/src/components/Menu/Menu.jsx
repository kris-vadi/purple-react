import styles from './Menu.module.css';

function Menu() {
	return (
		<nav className={styles['menu']}>
			<a href="/" className={styles['link']}>Поиск фильмов</a>
			<a href="/" className={styles['link']}>Мои фильмы</a>
		</nav>
	);
}

export default Menu;