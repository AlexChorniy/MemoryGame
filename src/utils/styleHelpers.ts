const gridSize = 8;
const defaultGridSize = 8;

export const gridPx = (size = defaultGridSize): number => {
  return Number(`${((size * gridSize) / defaultGridSize).toFixed(2)}`);
};

export const fontSizeStandard = (add = 0): number => add + 14;
