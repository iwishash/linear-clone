// 'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { CSSProperties } from 'react';
import Container from './container';
// import { useInView } from 'react-intersection-observer';

type FeaturesProps = {
  children: React.ReactNode;
  color: string;
};

type MainFeatureProps = {
  image: string;
  text: string;
  title: React.ReactNode;
};

type FeatureGridProps = {
  features: {
    icon: React.FC;
    title: string;
    text: string;
  }[];
};

type FeatureCardsProps = {
  features: {
    image: string;
    imageClassName: string;
    title: string;
    text: string;
  }[];
};

const Features = ({ children, color }: FeaturesProps) => {
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  //   triggerOnce: false,
  // });

  return (
    <section
      // ref={ref}
      className='relative flex flex-col items-center py-[12.8rem] w-full
      after:absolute after:inset-0
      after:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]'
      style={{ '--feature-color': color } as CSSProperties}
    >
      <div className='my-[25.2rem] w-full'>{children}</div>
    </section>
  );
};

const MainFeature = ({ image, text, title }: MainFeatureProps) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]'>
        <div className='text-gradient text-6xl md:text-8xl mb-11 text-center'>
          {title}
        </div>
        <div
          className='relative rounded-[14px] before:rounded-[inherit] before:absolute before:inset-0 before:p-[1px] before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] 
      before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] 
      before:[mask-composite:xor]
      after:bg-[rgba(255,_255,_255,_0.15)] after:absolute after:inset-0 after:rounded-[inherit]
      after:[mask:linear-gradient(black,_transparent)]'
        >
          <Image
            className=''
            src={image}
            alt='main feature image'
            width={777}
            height={300}
          />
        </div>
        <p className='text-4xl my-16 md:max-w-[64rem] leading-tight'>{text}</p>
        <hr className='mb-[7.2rem] h-[1px] w-full border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]' />
      </div>
    </div>
  );
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <Container>
      <div className='grid grid-cols-2  md:grid-cols-3 w-full gap-x-2 lg:gap-x-0 gap-y-9 mb-[14rem]'>
        {features.map(({ title, text, icon }) => {
          const Icon = icon;
          return (
            <div
              key={title}
              className='lg:mx-auto w-auto lg:w-[25.6rem] lg:[&_svg]:inline [&_svg]:fill-white lg:[&_svg]:mr-[6px] [&_svg]:mb-[5px]'
            >
              <Icon />
              <span className='text-sm md:text-md'>{title}</span>
              <span className='block lg:inline text-sm md:text-md text-secondary-text'>
                {' '}
                {text}
              </span>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const FeatureCards = ({ features }: FeatureCardsProps) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-6 w-[95%] mx-auto'>
      {features.map(({ title, text, image, imageClassName }) => {
        return (
          <div
            key={title}
            className='relative aspect-[1.1] overflow-hidden rounded-[2.4rem] md:rounded-[4.8rem] p-14 
              before:bg-glass-gradient border border-transparent-white
              before:inset-0 before:absolute
              bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)]'
          >
            <h3 className='text-2xl mb-2'>{title}</h3>
            <p className='text-md text-secondary-text max-w-[31rem]'>{text}</p>
            <Image
              className={clsx('absolute max-w-none', imageClassName)}
              src={image}
              alt='list board image'
              width={500}
              height={300}
            />
          </div>
        );
      })}
    </div>
  );
};

Features.Main = MainFeature;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;

export default Features;
