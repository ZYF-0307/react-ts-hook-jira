import { useState, useEffect } from "react";

export const isFalsy = (value: unknown) => {
  return value === 0 ? false : !value;
};

export const isVoid = (value: unknown) => {
  return value === undefined || value === null || value === "";
};

export const cleanObject = (object?: { [key: string]: unknown }) => {
  if (!object) return {};

  const result = { ...object };
  Object.keys(result).forEach((key) => {
    if (isVoid(result[key])) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // 每次在上一个UseEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

// homeWork
export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value: value,
    clear: () => {
      setValue([]);
    },
    removeIndex: (index: number) => {
      const cpValue = [...value];
      cpValue.splice(index, 1);
      setValue(cpValue);
    },
    add: (item: T) => {
      setValue(value.concat(item));
    },
  };
};
