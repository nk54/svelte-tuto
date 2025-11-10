export function scale(domain: number[], range: number[]) {
  const m = (range[1] - range[0]) / (domain[1] - domain[0]);
  return (value: number) => range[0] + m * (value - domain[0]);
}

export function getTicks(min: number, max: number) {
  const ticks: number[] = [];
  let n = 10 * Math.ceil(min / 10);

  while (n < max) {
    ticks.push(n);
    n += 10;
  }

  return ticks;
}
