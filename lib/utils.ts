//  Description: This file contains utility functions that can be used across the application.

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// function to merge the tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// function to get the substring of the string based on the length
const getSubString = (str: string, length: number) => {
  return str.length > length ? str.substring(0, length) + '...' : str;
};

// function to capitalize the first letter of the string
const firstLetterToUpperCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export { getSubString, firstLetterToUpperCase };
