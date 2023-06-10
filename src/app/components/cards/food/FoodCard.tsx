import Image from 'next/image';
import styles from './FoodCard.module.css';

export interface IFoodCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const FoodCard: React.FC<IFoodCard> = ({ tag, title, body, author, time }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src="/item-food.jpg"
            alt="card__image"
            className={styles.card__image}
            width="400"
            height="300"
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <Image
              src="/avatar.jpg"
              alt="user__image"
              className={styles.user__image}
              width="40"
              height="40"
            />
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
