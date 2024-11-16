function Image({name, alt}) {
	const imageUrl = `./src/assets/films/${name}`;

	return (
		<img src={imageUrl} alt={alt} />
	);
}

export default Image;