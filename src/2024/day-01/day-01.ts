export const distanceApart = (input: string): number => {
  const trimmed = input.trimEnd();
  const lines = trimmed.split('\n');
  const left: number[] = [];
  const right: number[] = [];

  for (const line of lines) {
    const [lineLeft, lineRight] = line.split(/\s+/);
    left.push(Number(lineLeft));
    right.push(Number(lineRight));
  }

  left.sort();
  right.sort();

  return left.reduce((prev, curr, index) => {
    return prev + Math.abs(curr - right[index]);
  }, 0);
};

export const distanceSimilarity = (input: string): number => {
  const trimmed = input.trimEnd();
  const lines = trimmed.split('\n');
  const left: number[] = [];
  const right: number[] = [];

  for (const line of lines) {
    const [lineLeft, lineRight] = line.split(/\s+/);
    left.push(Number(lineLeft));
    right.push(Number(lineRight));
  }

  left.sort();
  right.sort();

  return left.reduce((prev, curr) => {
    return prev + curr * right.filter((item) => item === curr).length;
  }, 0);
};
