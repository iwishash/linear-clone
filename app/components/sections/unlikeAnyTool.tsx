import { Keyboard } from '../imgs/keyboard';
import { Zap } from '../imgs/zap';
import { LogoLight } from '../imgs/logoLight';
import Button, { Highlight } from '../button';
import Chevron from '../icons/chevron';
import Container from '../container';
import KeyboardShortcut from '../keyboard-shortcut';

const UnlikeAnyTool = () => {
  return (
    <div>
      <Container>
        <div className='text-center'>
          <h2 className='text-[3.6rem] md:text-[5.6rem] tracking-tight leading-none'>
            Unlike any tool
            <br /> you’ve used before
          </h2>
          <p className='mb-12 text-lg md:text-xl text-secondary-text max-w-[68rem] mx-auto'>
            Designed to the last pixel and engineered with unforgiving
            precision, Linear combines UI elegance with world-class performance.
          </p>
        </div>
      </Container>
      <div className='h-[48rem] overflow-hidden md:h-auto md:overflow-auto'>
        <div className='px-8 pb-12 snap-x snap-mandatory flex md:flex-wrap gap-6 overflow-x-auto'>
          <div className='relative overflow-hidden shrink-0 snap-center min-h-[48rem] flex flex-col justify-end items-center md:basis-[calc(66.66%-12px)] bg-glass-gradient border border-transparent-white rounded-[4.8rem] p-8 md:p-14'>
            <div className='w-full'>
              <KeyboardShortcut />
            </div>
            <p className='text-3xl text-center tracking-tight leading-tight'>
              Built for your keyboard
            </p>
            <p className='text-md  text-secondary-text text-center mt-4 max-w-[42rem]'>
              Fly through your tasks with rapid-fire keyboard shortcuts for
              everything. Literally everything.
            </p>
          </div>
          <div className='relative overflow-hidden shrink-0 snap-center min-h-[48rem] flex flex-col justify-end items-center md:basis-[calc(33.33%-12px)] bg-glass-gradient border border-transparent-white rounded-[4.8rem] p-8 md:p-14'>
            <div className='absolute top-[-9.2rem] mask-lenear-faded'>
              <Zap />
            </div>
            <p className='text-3xl text-center tracking-tight leading-tight'>
              Breathtakingly fast
            </p>
            <p className='text-md  text-secondary-text text-center mt-4'>
              Built for speed with 50ms interactions and real-time sync.
            </p>
          </div>
          <div className='group  relative overflow-hidden shrink-0 snap-center min-h-[48rem] flex flex-col justify-end items-center md:basis-[calc(33.33%-12px)] bg-glass-gradient border border-transparent-white rounded-[4.8rem] p-7 md:p-12'>
            <div className='absolute top-[-10rem] w-[130%] overflow-hidden pointer-events-none'>
              <LogoLight />
            </div>
            <p className='text-3xl text-center tracking-tight leading-tight'>
              Designed for modern software teams
            </p>
            <p className='text-md  text-secondary-text text-center mt-4'>
              Comes with built-in workflows that create focus and routine.
            </p>
            <Button
              href='#'
              variant='secondary'
              size='small'
              className='absolute transition-[opacity,transform] bottom-[20rem] opacity-0 translate-y-[30%]  group-hover:opacity-100 group-hover:transform-none'
            >
              <div className='text-white'>Linear Method</div>
              <Highlight>
                <div className='flex items-center gap-1'>
                  <p className='text-xs text-white'>Product Principles</p>
                  <Chevron />
                </div>
              </Highlight>
            </Button>
          </div>
          <div className='relative overflow-hidden shrink-0 snap-center min-h-[48rem] flex flex-col justify-end md:basis-[calc(66.66%-12px)] bg-glass-gradient border border-transparent-white rounded-[4.8rem] p-8 md:p-14'>
            <p className='text-3xl text-center tracking-tight leading-tight'>
              Meet your command line
            </p>
            <p className='text-md  text-secondary-text text-center mt-4'>
              Complete any action in seconds with the global command menu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlikeAnyTool;
