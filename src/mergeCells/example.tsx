import React from 'react';
import { mergeCells } from './mergeCells';
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
          <th>ユーザID</th>
          <th>カテゴリID</th>
          <th>アイテムID</th>
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
