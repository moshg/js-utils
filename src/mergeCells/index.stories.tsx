import { ComponentStory, ComponentMeta } from '@storybook/react';

import React from 'react';
import { mergeCells } from '.';
import styled from '@emotion/styled';

export const MergeCells: React.FC = () => {
  const data = [
    [1, 1, 1],
    [1, 1, 2],
    [1, 2, 2],
    [2, 2, 1],
  ].map(([userId, categoryId, itemId]) => ({ userId, categoryId, itemId }));

  const displayData = mergeCells(data, ['userId', 'categoryId']);

  return (
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Category ID</th>
          <th>Item ID</th>
        </tr>
      </thead>
      <tbody>
        {displayData.map(
          ({ userId, userIdSpan, categoryId, categoryIdSpan, itemId }, i) => (
            <tr key={i}>
              {userIdSpan > 0 && <Cell rowSpan={userIdSpan}>{userId}</Cell>}
              {categoryIdSpan > 0 && (
                <Cell rowSpan={categoryIdSpan}>{categoryId}</Cell>
              )}
              <Cell>{itemId}</Cell>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

const Cell = styled.td`
  border: solid black 1px;
`;

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/MergeCells',
  component: MergeCells,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MergeCells>;
