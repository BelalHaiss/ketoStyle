export function formatTimes(totalMillis: number) {
  let mins = 0,
    secs = 0,
    hours = 0;

  hours = Math.floor((totalMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  mins = Math.floor((totalMillis % (1000 * 60 * 60)) / (1000 * 60));
  secs = Math.floor((totalMillis % (1000 * 60)) / 1000);

  return { hours, mins, secs };
}
