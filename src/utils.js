export const clamp = (cur, shift, minInclusive, maxExclusive) => {
  const target = cur + shift;
  return target >= minInclusive
    ? target < maxExclusive
      ? target
      : minInclusive
    : maxExclusive + target;
};
