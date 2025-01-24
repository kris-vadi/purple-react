import { forwardRef } from 'react';
import styles from './Input.module.css';

import cn from 'classnames';

const Input = forwardRef(function Input({ type, className, placeholder, name, ...attrs}, ref) {
	const classes = cn(
		styles['input'],
		styles[className]
	);

	return (
		<input type={type} className={classes} placeholder={placeholder} name={name} ref={ref} {...attrs}/>
	);
});

export default Input;