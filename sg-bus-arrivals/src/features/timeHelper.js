export const timeToArrival = (time) => {
  // compare current time to arrival time
  const now = new Date();
  const arrivalTime = new Date(time);
  const diff = arrivalTime - now;

  // need to modify this to follow according to LTA guidelines
  const minutes = Math.floor(diff / 1000 / 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return `${minutes}m ${seconds}s`;
};
