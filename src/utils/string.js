import React from 'react';

export const cutStringWithDots = (string, length) =>
  `${string.slice(0, length)}${string.length > length ? '...' : ''}`;

export const addLineBreaks = string =>
  string.split('\n').map((text, index, arr) => (
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={`${text}-${index}`}>
      {text}
      {index === arr.length - 1 ? <></> : <br />}
    </React.Fragment>
  ));
