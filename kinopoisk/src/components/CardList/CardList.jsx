import { filmsData } from '../../store/filmsLData';
import Card from '../Card/Card';
import './CardList.css';

function CardList() {
	return (
		<div className="card-list">
			{
				filmsData.map((film) => (
					<Card
						name={film.name}
						rate={film.rate}
						image={film.image}
						key={`${film.id}${film.name}`}/>
				))
			};
		</div>
	);
}

export default CardList;