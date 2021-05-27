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
