import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Search.css';

function Search() {
	const [ inputData, setInputData ] = useState('');

	const inputChange = (event) => {
		setInputData(event.target.value);
	};

	const startSearch = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<form className="search" onSubmit={startSearch}>
			<div className="search__input">
				<Input 
					type={'text'}
					className={'input_search'}
					placeholder={'Введите название'}
					value={inputData}
					onChange={inputChange} />
			</div>
			<Button
				buttonText={'Искать'}/>
		</form>
	);
}

export default Search;