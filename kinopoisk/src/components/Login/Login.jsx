import { useContext } from 'react';
import styles from './Login.module.css';
import { UserContext, userInitialState } from '../../context/user.context';


function Login() {
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const logout = () => {
		setCurrentUser(userInitialState);
	};
	
	const isLogined = () => {
		if (currentUser && currentUser.isLogined) {
			return (<>
				<div className={styles['login']}>{currentUser.name}<img src="../../public/user.svg" alt="login icon" /></div>
				<div>Выйти</div>
			</>);
		} else {
			return (<div className={styles['login']} onClick={logout}>	Войти<img src="../../public/login.svg" alt="login icon" /></div>);
		}
	};

	return (
		<a href="/" className={styles['login']}>
			{isLogined()}
		</a>
	);
}

export default Login;