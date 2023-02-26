import { useState, useEffect } from 'react';

const Phase = {
  Typing: 'Typing',
  Pausing : 'Pausing',
  Deleting: 'Deleting'
}

const TYPING_INTERVAL = 150;
const PAUSE_MS = 1000;
const DELETING_INTERVAL = 50;

export const Typewriter = (content) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(Phase.Typing);
  const [text, setText] = useState('');

  useEffect(() => {
    switch(phase) {
      case Phase.Typing: {
        const nextText = content[selectedIndex].slice(0, text.length + 1);

        if (nextText === text){
          setPhase(Phase.Pausing)
          return
        }

        const timeout = setTimeout(() => {
          setText(nextText);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case Phase.Deleting: {
        if (!text){
          const nextIndex = selectedIndex + 1
          setSelectedIndex(content[nextIndex] ? nextIndex : 0)
          setPhase(Phase.Typing)
          return;
        }
        const nextRemaining = content[selectedIndex].slice(
          0,
          text.length - 1
        );

        const timeout = setTimeout(() => {
          setText(nextRemaining)
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }

      case Phase.Pausing:
        default:
          const timeout = setTimeout(() => {
            setPhase(Phase.Deleting)
          }, PAUSE_MS)

          return () => clearTimeout(timeout)
    }
  }, [content, text, selectedIndex, phase]);

  return text;
};
