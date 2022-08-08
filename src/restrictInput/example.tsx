import { useRestrictInput } from '.';

export const UseRestrictInput: React.FC = () => {
  const handleInput = useRestrictInput({
    pattern: /^(\d|[a-zA-Z])*$/,
    initialValue: '',
  });

  return <input onInput={handleInput} />;
};
