export const timeToArrival = (time) => {
  // check for cases where arrival data is NOT available
  if (!time) return "-";

  // compare current time to arrival time
  const now = new Date();
  const arrivalTime = new Date(time);
  const diff = arrivalTime - now;

  // LTA guidelines is to round down to nearest minute
  const minutes = Math.floor(diff / 1000 / 60);
  if (minutes < 1) return "Arr";
  return `${minutes}m `;
};
