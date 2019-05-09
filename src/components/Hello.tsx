import * as React from 'react';

export interface Props {
  name: string;
  level?: number;
}

function Hello({ name, level = 1 }: Props) {
  if (level <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">Hello, {name + getExclamationMarks(level)}</div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
