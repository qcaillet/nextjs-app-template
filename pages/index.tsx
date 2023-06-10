import FoodCard from '@/app/components/cards/food/FoodCard';
import { mockFoodCardProps } from '@/app/components/cards/food/FoodCard.mocks';
import PrimaryLayout from '@/app/components/layouts/primary/PrimaryLayout';
import SidebarLayout from '@/app/components/layouts/sidebar/SidebarLayout';
import styles from '@/app/page.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Bienvenue !</h1>
      <FoodCard {...mockFoodCardProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
