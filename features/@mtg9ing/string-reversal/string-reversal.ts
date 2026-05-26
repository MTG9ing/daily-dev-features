export const reverseString = (str: string): string => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  return str.split("").reverse().join("");
};
