import { useEffect, useState } from "react";

type IDebounceParam = {
  searchTerm: string;
  delay: number;
};

export const useDebounce = ({ searchTerm, delay }: IDebounceParam) => {
  const [debounceTerm, setDebounceTerm] = useState(searchTerm);
  useEffect(() => {
    const timeOutHandler = setTimeout(() => {
      setDebounceTerm(searchTerm);
    }, delay);

    return () => {
      clearTimeout(timeOutHandler);
    };
  }, [searchTerm, delay]);

  return debounceTerm;
};
