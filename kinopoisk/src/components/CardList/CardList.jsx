import { filmsData } from '../../store/filmsLData';
import Card from '../Card/Card';
import styles from './CardList.module.css';

function CardList() {
	return (
		<div className={styles['list']}>
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