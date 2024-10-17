import './Paragraph.css';

function Paragraph({innerText, fontSize = 16}) {
	const fontStyle = `font-size: ${fontSize}px`;

	return (
		<p className="paragraph" style={fontStyle}>{innerText}</p>
	);
}

export default Paragraph;