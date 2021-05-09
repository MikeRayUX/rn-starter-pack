export const sleep = (secs) => {
  return new Promise((resolve) => setTimeout(resolve, seconds(secs)));
};

export const seconds = (milliseconds) => {
  return milliseconds * 1000;
};

export const minutes = (milliseconds) => {
  return milliseconds * 1000 * 60;
};
