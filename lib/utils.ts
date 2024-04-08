//  Description: This file contains utility functions that can be used across the application.

// function to get the substring of the string based on the length
const getSubString = (str: string, length: number) => {
  return str.length > length ? str.substring(0, length) + '...' : str;
};

// function to capitalize the first letter of the string
const firstLetterToUpperCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export { getSubString, firstLetterToUpperCase };
