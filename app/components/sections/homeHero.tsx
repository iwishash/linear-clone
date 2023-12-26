import Button, { Highlight } from '../button';
import { Hero, HeroSubtitle, HeroTitle } from '../hero';
import HeroImage from '../heroImage';
import Chevron from '../icons/chevron';

const HomeHero = () => {
  return (
    <>
      <Hero>
        <Button
          href='#'
          variant='secondary'
          size='small'
          className='animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]'
        >
          <div>Introducing Linear Asks</div>
          <Highlight>
            <Chevron />
          </Highlight>
        </Button>
        <HeroTitle className='animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]'>
          Linear is a better way
          <br className='hidden md:block' /> to build products
        </HeroTitle>
        <HeroSubtitle className='animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]'>
          Meet the new standard for modern software development.
          <br className='hidden md:block' />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubtitle>
        <Button
          href='#'
          variant='primary'
          size='large'
          className='animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]'
        >
          Get started
          <Highlight>
            <Chevron />
          </Highlight>
        </Button>
        <HeroImage />
      </Hero>
    </>
  );
};

export default HomeHero;
