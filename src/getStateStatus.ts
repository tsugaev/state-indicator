export const getStateStatus = (size: number) => {
  if (size <= 3) {
    return 'lightest';
  } else if (size <= 6) {
    return 'light';
  } else if (size <= 9) {
    return 'medium';
  } else {
    return 'large';
  }
};
