import Image from '../Image/Image.';
import styles from './Card.module.css';


function Card({name, rate, image, key}) {
	return (
		<div className={styles['card']} key={key}>
			<div className={styles['img']}>
				<Image
					name={image}
					alt={name} />
				<button className={styles['rating']}>
					<span className={styles['star']}></span>
					{rate}
				</button>
			</div>
			<h2 className={styles['title']}>{name}</h2>
			<a href="/" className={styles['favorites']}>
				<span className={styles['favorites-icon']}></span>
				В избранное
			</a>
		</div>
	);
}

export default Card;