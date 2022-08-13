import { array } from '@/array';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { FlexFont } from '.';

type CalendarIconProps = {
  size?: string | undefined;
};

const CalendarIcon: React.FC<CalendarIconProps> = ({ size }) => {
  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        width: size,
        height: size,
      }}
    >
      <div
        style={{
          backgroundColor: '#8ac',
          flex: '3 1 0',
          minHeight: 0,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {array(2, (i) => (
          <div
            key={i}
            style={{
              width: '7.5%',
              height: '25%',
              backgroundColor: '#fff',
              marginLeft: '5%',
            }}
          />
        ))}
      </div>
      <div
        style={{
          backgroundColor: '#eee',
          flex: '7 1 0',
          minHeight: 0,
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        <FlexFont size="100%">17</FlexFont>
      </div>
    </div>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CalendarIcon',
  component: CalendarIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CalendarIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CalendarIcon> = (args) => (
  <CalendarIcon {...args} />
);

export const CalendarIconSm = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CalendarIconSm.args = { size: '32px' };
