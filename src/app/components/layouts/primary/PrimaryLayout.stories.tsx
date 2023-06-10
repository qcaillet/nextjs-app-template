import { Meta, StoryObj } from '@storybook/react';
import PrimaryLayout, { IPrimaryLayout } from './PrimaryLayout';
import { mockPrimaryLayoutProps } from './PrimaryLayout.mocks';

export default {
  title: 'templates/PrimaryLayout',
  component: PrimaryLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof PrimaryLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<IPrimaryLayout>;

export const Base: Template = (args: IPrimaryLayout) => (
  <PrimaryLayout {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPrimaryLayoutProps.base,
} as IPrimaryLayout;
