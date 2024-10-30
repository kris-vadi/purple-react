import './Paragraph.css';

function Paragraph({innerText, fontSize}) {
	const fontStyle = {
		fontSize: fontSize
	};

	return (
		<p className="paragraph" style={fontStyle}>{innerText}</p>
	);
}

export default Paragraph;