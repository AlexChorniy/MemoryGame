const gridSize = 8;
const defaultGridSize = 8;

export const gridPx = (size = defaultGridSize): number => {
  return size * gridSize;
};

export const fontSizeStandard = (add = 0): number => add + 14;
