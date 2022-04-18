import { Button } from './';
import ButtonDocs from './ButtonDocs.mdx';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    // Assigns the argType to the Text category
    label: {
      table: {
        category: 'Text',
      },
    },
    type: { 
      options: ['primary', 'secondary', 'danger'],
      control: 'radio',
      table: {
        category: 'Type'
      }
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    outline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    logo: {
      options: ['', 'csv', 'slack', 'outlook', 'gmail', 'calendar'],
      control: { type: 'select' }
    }
  },
  args: {
    type: 'primary',
    label: 'Button',
    size: 'md',
    disabled: false,
    outline: false
  },
  parameters: {
    docs: {
      page: ButtonDocs,
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return Button({ ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
  size: 'md',
  disabled: false,
  outline: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  type: 'secondary',
};