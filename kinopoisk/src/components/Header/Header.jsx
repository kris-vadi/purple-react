import Login from '../Login/Login';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import './Header.css';

function Header() {
	return (
		<div className="heaader">
			<Logo />
			<Menu />
			<Login />
		</div>
	);
}

export default Header;