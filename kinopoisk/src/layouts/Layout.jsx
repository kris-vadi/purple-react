// import CardList from '../components/CardList/CardList';
import Auth from '../components/Auth/Auth';
import Header from '../components/Header/Header';
// import Paragraph from '../components/Paragraph/Paragraph';
// import Search from '../components/Search/Search';
// import Title from '../components/Title/Title';
import styles from './Layout.module.css';


function Layout() {

	return (
		<>
			<Header />
			<div className={styles['content']}>
				<Auth/>
				{/* <Title text={'Поиск'} />
				<Paragraph 
					innerText={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
					fontSize={16px}
				/>
				<Search />
				<CardList /> */}
			</div>
		</>
	);
}

export default Layout;