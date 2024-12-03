export const day2 = (input: string) => {
  const trimmed = input.trim();
  const lines = trimmed.split('\n').map((line) => line.split(' '));

  const slopedUp = lines.map((row, rowIndex) =>
    row.map(Number).every((currentItem, index) => {
      if (index) {
        const previousItem = Number(lines[rowIndex][index - 1]);
        return currentItem < previousItem && Math.abs(currentItem - previousItem) <= 3;
      }
      return true;
    }),
  );

  const slopedDown = lines.map((row, rowIndex) =>
    row.map(Number).every((currentItem, index) => {
      if (index) {
        const previousItem = Number(lines[rowIndex][index - 1]);
        return currentItem > previousItem && Math.abs(currentItem - previousItem) <= 3;
      }
      return true;
    }),
  );

  return slopedUp.map((item, index) => item || slopedDown[index]);
};
