import { Button } from './';
import ButtonDocs from './ButtonDocs.mdx';
import { withDesign } from 'storybook-addon-designs'

export default {
  argTypes: {
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
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/FkXq8kXWv7HB4kU2YIL0XT/Guidelines?node-id=3863%3A16497',
    },
  },
  decorators: [withDesign],
};

const Template = ({ ...args }) => {
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