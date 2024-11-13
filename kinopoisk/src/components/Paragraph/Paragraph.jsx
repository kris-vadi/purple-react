import styles from './Paragraph.module.css';


function Paragraph({innerText, fontSize}) {
	const fontStyle = {
		fontSize: fontSize
	};

	return (
		<p className={styles['paragraph']} style={fontStyle}>{innerText}</p>
	);
}

export default Paragraph;