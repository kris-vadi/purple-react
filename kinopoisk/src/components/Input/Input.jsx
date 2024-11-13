import styles from './Input.module.css';

import cn from 'classnames';

function Input({ type, className, placeholder, ...attrs}) {
	const classes = cn(
		styles['input'],
		styles[className]
	);

	return (
		<input type={type} className={classes} placeholder={placeholder} {...attrs}/>
	);
}

export default Input;