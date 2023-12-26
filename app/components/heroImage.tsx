'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const HeroImage = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <div className='mt-[12.8rem] [perspective:2000px]'>
      <div
        className={clsx(
          'relative border border-transparent-white bg-hero-gradient bg-white bg-opacity-[0.01] rounded-lg',
          inView ? 'animate-image-rotate' : '[transform:rotateX(25deg)]',
          'before:bg-hero-glow before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[filter:blur(140px)]',
          inView ? 'before:animate-image-glow' : 'before:opacity-0'
        )}
      >
        <svg
          className={clsx(
            'absolute top-0 left-0 w-full h-full',
            '[&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]',
            inView && '[&_path]:animate-sketch-lines'
          )}
          width='100%'
          viewBox='0 0 1499 778'
          fill='none'
        >
          <path pathLength='1' d='M1500 72L220 72'></path>
          <path pathLength='1' d='M1500 128L220 128'></path>
          <path pathLength='1' d='M1500 189L220 189'></path>
          <path pathLength='1' d='M220 777L220 1'></path>
          <path pathLength='1' d='M538 777L538 128'></path>
        </svg>
        <Image
          className={clsx(
            'relative transition-opacity delay-[680ms] z-10',
            inView ? 'opacity-100' : 'opacity-0 delay-0'
          )}
          src={'/hero.webp'}
          width={1200}
          height={800}
          alt='hero image'
          ref={ref}
          priority={true}
        />
      </div>
    </div>
  );
};

export default HeroImage;
