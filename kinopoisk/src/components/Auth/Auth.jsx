import Input from '../Input/Input';
import Title from '../Title/Title';
import Button from '../Button/Button';
import styles from './Auth.module.css';
import { useContext, useRef } from 'react';
import { UserContext } from '../../context/user.context';

function Auth() {
	const { setCurrentUser } = useContext(UserContext);
	const inputRef = useRef();

	const autorize = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);

		const currentUserState = {
			name: formProps.userName,
			isLogined: true
		};

		console.log(currentUserState);
		setCurrentUser(currentUserState);
		inputRef.current.focus();
	};

	return (
		<>
			<Title text={'Вход'} />
			<form className={styles['auth']} onSubmit={autorize}>
				<Input 
					type={'text'}
					placeholder={'Введите имя'}
					name = {'userName'}
					ref = {inputRef} />
				<Button
					buttonText={'Войти в профиль'}/>
			</form>
		</>
				
	);
}

export default Auth;