export const timeToArrival = (time) => {
  // compare current time to arrival time
  const now = new Date();
  const arrivalTime = new Date(time);
  const diff = arrivalTime - now;

  // need to modify this to follow according to LTA guidelines
  // LTA guidelines is to round down to nearest minute
  const minutes = Math.floor(diff / 1000 / 60);
  if (minutes < 1) return "Arr";
  return `${minutes}m `;
};
