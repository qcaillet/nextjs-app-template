import { Meta, StoryObj } from '@storybook/react';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof BaseTemplate>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
type Template = StoryObj<IBaseTemplate>;

export const Base: Template = (args: IBaseTemplate) => (
  <BaseTemplate {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseTemplateProps.base,
} as IBaseTemplate;
