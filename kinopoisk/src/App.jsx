import './App.css';

import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
	const title = 'Поиск';
	const buttonText = 'Искать';
	const innerText = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.';
	const size = 16;

	return (
		<>
			<Title text={title} />
			<Paragraph 
				innerText={innerText}
				fontSize={size}
			/>
			<Button buttonText={buttonText}/>
		</>
	);
}

export default App;
