import { Meta, StoryObj } from '@storybook/react';
import SidebarLayout, { ISidebarLayout } from './SidebarLayout';
import { mockSidebarLayoutProps } from './SidebarLayout.mocks';

export default {
  title: 'templates/SidebarLayout',
  component: SidebarLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SidebarLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<ISidebarLayout>;

export const Base: Template = (args: ISidebarLayout) => (
  <SidebarLayout {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSidebarLayoutProps.base,
} as ISidebarLayout;
