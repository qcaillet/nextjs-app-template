import FoodCard from './components/cards/food/FoodCard';
import { mockFoodCardProps } from './components/cards/food/FoodCard.mocks';
import styles from './page.module.css';
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Hello World !</h1>
      </div>

      <div className={styles.grid}>
        <FoodCard {...mockFoodCardProps.base} />
        <FoodCard {...mockFoodCardProps.base} />
        <FoodCard {...mockFoodCardProps.base} />
        <FoodCard {...mockFoodCardProps.base} />
      </div>
    </main>
  );
}
