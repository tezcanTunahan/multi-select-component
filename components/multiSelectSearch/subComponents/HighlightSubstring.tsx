import React from 'react';
import { firstLetterToUpperCase } from '@/lib/utils';

type Props = {
  mainString: string;
  substring: string;
};

// Component to highlight "bold" the substring in the main string
export default function HighlightSubstring({ mainString, substring }: Props) {
  // both strings to lower case
  mainString = mainString.toLowerCase();
  substring = substring.toLowerCase();

  // if substring is not included in mainString, return mainString
  if (!mainString.includes(substring)) {
    return <span>{mainString}</span>;
  }

  // find the index of substring in mainString
  const index = mainString.indexOf(substring);
  // split the mainString into 3 parts => first part + substring + last part
  const firstPart = mainString.slice(0, index);
  const lastPart = mainString.slice(index + substring.length);

  // return the mainString with the substring highlighted
  return (
    <span>
      {firstLetterToUpperCase(firstPart)}
      <strong>{firstPart.length > 0 ? substring : firstLetterToUpperCase(substring)}</strong>
      {lastPart}
    </span>
  );
}
