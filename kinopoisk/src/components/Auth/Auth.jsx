import Input from '../Input/Input';
import Title from '../Title/Title';
import Button from '../Button/Button';
import styles from './Auth.module.css';
import { useState } from 'react';

function Auth() {
	const [ inputData, setInputData ] = useState('');

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
	};

	return (
		<>
			<Title text={'Вход'} />
			<form className={styles['auth']} onSubmit={autorize}>
				<Input 
					type={'text'}
					placeholder={'Введите название'}
					value={inputData}
					onChange={inputChange}/>
				<Button
					buttonText={'Войти в профиль'}/>
			</form>
		</>
				
	);
}

export default Auth;