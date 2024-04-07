import React from 'react';

export default function HighlightSubstring({ mainString, substring }: { mainString: string; substring: string }) {
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

  return (
    <span>
      {
        // firstPart first letter to uppercase
        firstPart.charAt(0).toUpperCase() + firstPart.slice(1)
      }
      <strong>
        {
          // if firstPart is empty, return substring first letter to uppercase
          firstPart.length > 0 ? substring : substring.charAt(0).toUpperCase() + substring.slice(1)
        }
      </strong>
      {lastPart}
    </span>
  );
}
