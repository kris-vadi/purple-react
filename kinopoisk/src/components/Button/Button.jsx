import styles from './Button.module.css';

function Button({buttonText}) {
	return (
		<button className={styles['button']}>{buttonText}</button>
	);
}

export default Button;