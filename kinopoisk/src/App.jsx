import './App.css';

import Title from './components/Title/Title';
import Button from './components/Button/Button';

function App() {
	const text = 'Поиск';
	const buttonText = 'Искать';

	return (
		<>
			<Title text={text} />
			<Button buttonText={buttonText}/>
		</>
	);
}

export default App;
