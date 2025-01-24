import Auth from '../components/Auth/Auth';
import Header from '../components/Header/Header';
import { UserContextProvider } from '../context/user.context';
import styles from './Layout.module.css';


function Layout() {

	return (
		<UserContextProvider>
			<Header />
			<div className={styles['content']}>
				<Auth/>
			</div>
		</UserContextProvider>

	);
}

export default Layout;