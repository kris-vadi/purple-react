import { useRef, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './Search.module.css';


function Search() {
	const [ inputData, setInputData ] = useState('');
	const inputRef = useRef();

	const inputChange = (event) => {
		setInputData(event.target.value);
	};

	const startSearch = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
		inputRef.current.focus();
	};

	return (
		<form className={styles['search']} onSubmit={startSearch}>
			<div className={styles['search-input']}>
				<Input 
					type={'text'}
					className={'search'}
					placeholder={'Введите название'}
					value={inputData}
					onChange={inputChange} 
					ref={inputRef} />
			</div>
			<Button
				buttonText={'Искать'}/>
		</form>
	);
}

export default Search;