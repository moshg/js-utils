import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useRestrictInput } from '.';

type UseRestrictInputProps = {
  pattern: RegExp;
};

const UseRestrictInput: React.FC<UseRestrictInputProps> = ({ pattern }) => {
  const handleInput = useRestrictInput({
    pattern,
    initialValue: '',
  });

  return <input onInput={handleInput} />;
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/UseRestrictInput',
  component: UseRestrictInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UseRestrictInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UseRestrictInput> = (args) => (
  <UseRestrictInput {...args} />
);

export const AlphaNumeric = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AlphaNumeric.args = { pattern: /^[a-zA-Z0-9]*$/ };

export const Katakana = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Katakana.args = { pattern: /^[ア-ン]*$/ };
