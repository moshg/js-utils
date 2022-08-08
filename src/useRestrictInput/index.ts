import { useCallback, useRef } from 'react';

export const useRestrictInput = ({
  pattern,
  initialValue,
}: {
  pattern: RegExp;
  initialValue?: string;
}): React.FormEventHandler<HTMLInputElement> => {
  const prevValue = useRef(initialValue ?? '');

  return useCallback((e) => {
    if (e.currentTarget.value.match(pattern)) {
      prevValue.current = e.currentTarget.value;
    } else {
      e.currentTarget.value = prevValue.current;
    }
  }, []);
};
