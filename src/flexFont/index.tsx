import { useLayoutEffect, useRef } from 'react';

export type FlexFontProps = {
  size?: `${number}%`;
  children?: string;
};

export const FlexFont: React.FC<FlexFontProps> = ({ size, children }) => {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!size) {
      return;
    }

    if (!ref.current) {
      return;
    }

    const height = ref.current.parentElement?.clientHeight;

    if (height === undefined) {
      return;
    }

    const percent = Number(size.slice(0, size.length - 1));
    const calc = (height * percent) / 100;
    ref.current.style.fontSize = `${calc}px`;
  });

  return (
    <span ref={ref} style={{ lineHeight: 1 }}>
      {children}
    </span>
  );
};
