const getDaysDifference = (start, end) => {
  const ms = end - start;
  const seconds = ms / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (!(start instanceof Date) || !(end instanceof Date)) {
    throw new Error("Both arguments must be instances of Date!");
  }

  if(!isFinite(days)){
    throw new Error('Invalid date values!');
  }

  if (days < 0) {
    throw new Error("End date cannot be earlier than start date!");
  }

  return days;
};

module.exports = { getDaysDifference };
