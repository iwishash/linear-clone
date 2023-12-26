'use client';

import { useRef } from 'react';
import Button, { Highlight } from './button';
import { Keyboard } from './imgs/keyboard';

const shortcuts = [
  { text: 'Opens command line', keys: '⌘k' },
  { text: 'Assign issue to me', keys: 'i' },
  { text: 'Assign issue to', keys: 'a' },
  { text: 'Change issue status', keys: 's' },
  { text: 'Set issue priority', keys: 'p' },
  { text: 'Add issue labels', keys: 'l' },
  { text: 'Set due date', keys: '⇧d' },
  { text: 'Set parent issue', keys: '⇧⌘p' },
  { text: 'Add sub-issue', keys: '⇧⌘o' },
  { text: 'Create new issue', keys: 'c' },
  { text: 'Create new issue from template', keys: '⌥c' },
  { text: 'Move to project', keys: '⇧p' },
];

export default function KeyboardShortcut() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const illustrationWrapperRef = useRef<HTMLDivElement>(null);

  const onShortcutBtnClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    keys: string
  ) => {
    e.preventDefault();
    wrapperRef.current?.scrollTo({
      left: e.currentTarget.offsetLeft - wrapperRef.current?.clientWidth / 2,
      behavior: 'smooth',
    });

    if (!illustrationWrapperRef.current) return;

    illustrationWrapperRef.current
      ?.querySelectorAll('.active')
      .forEach((el) => el.classList.remove('active'));

    const keyArray = keys.split('');
    const keyElements = keyArray.map(
      (keyElemant) =>
        illustrationWrapperRef.current?.querySelector(
          `[data-key=${keyElemant}]`
        )
    );
    keyElements.forEach((keyElement) => {
      keyElement?.classList.add('active');
    });
    console.log(keyElements);
  };

  return (
    <>
      <div ref={illustrationWrapperRef} className='mask-keyboard w-full'>
        <Keyboard />
      </div>
      <div className='w-full overflow-hidden mask-shortcutkeys my-8'>
        <div
          ref={wrapperRef}
          className='flex gap-2 whitespace-nowrap overflow-x-scroll no-scrollbar snap-x snap-mandatory'
        >
          {shortcuts.map((shortcut) => {
            return (
              <Button
                key={shortcut.keys}
                variant='secondary'
                size='small'
                className='shrink-0 snap-center last:mr-[50vw] first:ml-[50vw]'
                onClick={(e) => onShortcutBtnClick(e, shortcut.keys)}
              >
                <Highlight>{shortcut.keys}</Highlight>
                <span>{shortcut.text}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
}

//make a typescript function to get random number between 1 and 200
