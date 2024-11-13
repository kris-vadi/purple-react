import styles from './Login.module.css';


function Login() {
	return (
		<a href="/" className={styles['login']}>
			Войти
			<img src="../../public/login.svg" alt="login icon" />
		</a>
	);
}

export default Login;