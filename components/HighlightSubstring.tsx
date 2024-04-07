import React from 'react';

export default function HighlightSubstring({ mainString, substring }: { mainString: string; substring: string }) {
  function highlightSubstring(mainString: string, substring: string) {
    //  to lower case
    mainString = mainString.toLowerCase();
    substring = substring.toLowerCase();
    // İkinci stringin birincide geçip geçmediğini kontrol et
    if (mainString.includes(substring)) {
      // Geçiyorsa, o kısmı bold yap
      const index = mainString.indexOf(substring);
      const firstPart = mainString.slice(0, index);
      const lastPart = mainString.slice(index + substring.length);

      return (
        <span>
          {
            // first part first letter to upper case
            firstPart.charAt(0).toUpperCase() + firstPart.slice(1)
          }
          <strong>
            {
              // substring first letter to upper case
              firstPart.length > 0 ? substring : substring.charAt(0).toUpperCase() + substring.slice(1)
            }
          </strong>
          {lastPart}
        </span>
      );
    }
    // Geçmiyorsa, birinci stringi olduğu gibi dön
    return mainString;
  }
  return <div>{highlightSubstring(mainString, substring)}</div>;
}
