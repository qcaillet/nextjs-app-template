import { Meta, StoryObj } from '@storybook/react';
import FoodCard, { IFoodCard } from './FoodCard';
import { mockFoodCardProps } from './FoodCard.mocks';

export default {
  title: 'templates/FoodCard',
  component: FoodCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof FoodCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<IFoodCard>;

export const Base: Template = (args: IFoodCard) => <FoodCard {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFoodCardProps.base,
} as IFoodCard;
