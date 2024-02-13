import { ChangeEvent, useState } from "react";

interface InputReturn {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function useInput(initialValue = ""): InputReturn {
  const [value, setvalue] = useState(initialValue);

  const onChange = function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setvalue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}
