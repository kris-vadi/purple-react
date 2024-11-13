import CardList from '../components/CardList/CardList';
import Header from '../components/Header/Header';
import Paragraph from '../components/Paragraph/Paragraph';
import Search from '../components/Search/Search';
import Title from '../components/Title/Title';
import './Layout.css';

function Layout() {
	const size = '16px';
	const title = 'Поиск';
	const innerText = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';

	return (
		<>
			<Header />
			<div className="content">
				<Title text={title} />
				<Paragraph 
					innerText={innerText}
					fontSize={size}
				/>
				<Search />
				<CardList />
			</div>
		</>
	);
}

export default Layout;