import './Input.css';
import cn from 'classnames';

function Input({ type, className, placeholder, ...attrs}) {
	const classes = cn(
		'input',
		 className
	);

	return (
		<input type={type} className={classes} placeholder={placeholder} {...attrs}/>
	);
}

export default Input;