export const mergeCells = <
  T extends Record<string, unknown>,
  C extends readonly (keyof T & string)[]
>(
  data: T[],
  columnsToMerge: C
): WithSpan<T, C[number]>[] => {
  if (data.length === 0) {
    return [];
  }
  if (columnsToMerge.length === 0) {
    return data as WithSpan<T, C[number]>[];
  }

  const ret: WithSpan<T, C[number]>[] = [];

  const column: C[number] = columnsToMerge[0];
  const span = `${column}Span` as const;

  let value = data[0][column];
  const block: T[] = [];

  for (const record of data) {
    if (record[column] === value) {
      block.push({ ...record, [span]: 0 });
      continue;
    }

    (block[0][span] as number) = block.length;
    const processedBlock = mergeCells(block, columnsToMerge.slice(1));
    ret.push(...processedBlock);

    value = record[column];
    block.length = 0;
    block.push({ ...record, [span]: 0 });
  }
  (block[0][span] as number) = block.length;
  const processedBlock = mergeCells(block, columnsToMerge.slice(1));
  ret.push(...processedBlock);

  return ret;
};

export type WithSpan<T, C extends string> = T & {
  [P in `${C}Span`]: number;
};
