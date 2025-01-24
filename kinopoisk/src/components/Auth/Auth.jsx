import Input from '../Input/Input';
import Title from '../Title/Title';
import Button from '../Button/Button';
import styles from './Auth.module.css';
import { useRef, useState } from 'react';

function Auth() {
	const [ inputData, setInputData ] = useState('');
	const inputRef = useRef();

	const inputChange = (event) => {
		setInputData(event.target.value);
	};

	const autorize = (event) => {
		event.preventDefault();
		const userState = {
			name: inputData,
			isLogined: true
		};
		localStorage.setItem('user', JSON.stringify(userState));
		setInputData('');
		inputRef.current.focus();
	};

	return (
		<>
			<Title text={'Вход'} />
			<form className={styles['auth']} onSubmit={autorize}>
				<Input 
					type={'text'}
					placeholder={'Введите имя'}
					value={inputData}
					onChange={inputChange}
					ref = {inputRef} />
				<Button
					buttonText={'Войти в профиль'}/>
			</form>
		</>
				
	);
}

export default Auth;