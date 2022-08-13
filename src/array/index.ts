export const array = <T>(length: number, mapFn: (index: number) => T): T[] =>
  Array.from({ length }, (_, index) => mapFn(index));
