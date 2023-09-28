export const makeUppercase = (targetString) => {
  const lowString = targetString.toLowerCase();
  const splitString = lowString.split(" ");
  return splitString.reduce((acc, targetString) => {
    if (acc) {
      const upperString =
        targetString.charAt(0).toUpperCase() + targetString.slice(1);
      return acc + " " + upperString;
    } else {
      return targetString.charAt(0).toUpperCase() + targetString.slice(1);
    }
  }, "");
};
