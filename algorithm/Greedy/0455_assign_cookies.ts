function findContentChildren(g: number[], s: number[]): number {
  let si = 0;
  let gi = 0;
  let res = 0;

  while (gi < g.length && si < s.length) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    if (si >= gi) {
      si++;
      gi++;
      res++;
    } else {
      gi++
    }
  }

  return res;
}
