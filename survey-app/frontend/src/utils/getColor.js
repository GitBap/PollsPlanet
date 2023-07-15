export const getColor = (colorCSS) => {
  const color = getComputedStyle(document.documentElement).getPropertyValue(
    colorCSS
  );

  return color;
};
