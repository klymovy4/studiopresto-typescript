import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
}
