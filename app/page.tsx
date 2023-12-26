import Image from 'next/image';
import Container from './components/container';
import { Hero, HeroSubtitle, HeroTitle } from './components/hero';
import Button, { Highlight } from './components/button';
import Chevron from './components/icons/chevron';
import HeroImage from './components/heroImage';
import Clients from './components/sections/clients';
import Stars from './components/stars';
import clsx from 'clsx';
import HomeHero from './components/sections/homeHero';
import UnlikeAnyTool from './components/sections/unlikeAnyTool';
import IssueTracking from './components/sections/issueTracking';

export default function Home() {
  return (
    <>
      <div className='pb-[16.4rem] md:pb-[25.6rem]'>
        <Container className='pt-[6.4rem]'>
          <HomeHero />
        </Container>
      </div>
      <div>
        <Container>
          <Clients />
        </Container>
      </div>
      <div
        className={clsx(
          'relative z-[-1] h-[60rem] my-[-12.8rem] overflow-hidden mask-radial-faded',
          'before:absolute before:bg-radial-gradient [--color:#7877C6] before:opacity-40 before:inset-0',
          'after:absolute after:bg-background after:rounded-[50%] after:top-1/2 after:h-[142.8%] after:w-[200%] after:left-[-50%] after:border-t after:border-[rgba(120,118,197,0.4)]'
        )}
      >
        <Stars />
      </div>
      <div>
        <UnlikeAnyTool />
      </div>
      <div>
        <IssueTracking />
      </div>
    </>
  );
}
