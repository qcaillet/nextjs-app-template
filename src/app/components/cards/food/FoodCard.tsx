import styles from './FoodCard.module.css';

export interface IFoodCard {
  sampleTextProp: string;
}

const FoodCard: React.FC<IFoodCard> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default FoodCard;
