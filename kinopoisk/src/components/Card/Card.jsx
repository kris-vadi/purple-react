import Image from '../Image/Image.';
import './Card.css';

function Card({name, rate, image, key}) {
	return (
		<div className="card" key={key}>
			<div className="card__img">
				<Image
					name={image}
					alt={name} />
				<button className="card__rating">
					<span className="card__star"></span>
					{rate}
				</button>
			</div>
			<h2 className="card__title">{name}</h2>
			<a href="/" className="card__favorites">
				<span className="card__favorites-icon"></span>
				В избранное
			</a>
		</div>
	);
}

export default Card;