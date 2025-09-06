import React from 'react';

interface TypewriterProps {
    text: string[];
    customClassName?: string;
}

const TYPING_SPEED = 200;
export const Typewriter = ({ text, customClassName }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [textIndex, setTextIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = text[textIndex];

    if (!isDeleting && charIndex <= currentText.length) {
      setDisplayedText(currentText.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), TYPING_SPEED);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayedText(currentText.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), TYPING_SPEED / 2);
    } else if (!isDeleting && charIndex > currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setTextIndex((textIndex + 1) % text.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, text]);

  return (
    <span className={customClassName ? customClassName : ''}>{displayedText}</span>
  );
};