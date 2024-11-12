import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Paragraph from '../components/Paragraph/Paragraph';
import Title from '../components/Title/Title';
import './Layout.css';

function Layout() {
	const title = 'Поиск';
	const buttonText = 'Искать';
	const innerText = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
	const size = '16px';

	return (
		<>
			<Header />
			<div className="content">
				<Title text={title} />
				<Paragraph 
					innerText={innerText}
					fontSize={size}
				/>
				<Button buttonText={buttonText}/>
			</div>
		</>
	);
}

export default Layout;