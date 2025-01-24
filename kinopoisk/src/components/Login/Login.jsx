import { useEffect, useState } from 'react';
import styles from './Login.module.css';


function Login() {
	const [userState, setUserState] = useState('');

	useEffect(() => {
		const userStateInitial =  localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '';
		console.log(userStateInitial);
		setUserState(userStateInitial);
	}, []);
	
	const isLogined = () => {
		if (userState.isLogined) {
			return (<>
				<div className={styles['login']}>{userState.name}<img src="../../public/user.svg" alt="login icon" /></div>
				<div>Выйти</div>
			</>);
		} else {
			return (<div className={styles['login']}>	Войти<img src="../../public/login.svg" alt="login icon" /></div>);
		}
	};

	return (
		<a href="/" className={styles['login']}>
			{	isLogined()}
		</a>
	);
}

export default Login;