import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Paragraph from '../components/Paragraph/Paragraph';
import Title from '../components/Title/Title';
import './Layout.css';

function Layout() {
	const size = '16px';
	const title = 'Поиск';
	const buttonText = 'Искать';
	const innerText = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
  
	const handleClick = () => {
		console.log('clicked');
	};

	return (
		<>
			<Header />
			<div className="content">
				<Title text={title} />
				<Paragraph 
					innerText={innerText}
					fontSize={size}
				/>
				<Input 
					className={'input__search'}
					placeholder={'Введите название'} />
				<Button onClick={handleClick} buttonText={buttonText}/>
			</div>
		</>
	);
}

export default Layout;