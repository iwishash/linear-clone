import clsx from 'clsx';

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const Hero = ({ children }: HeroProps) => {
  return <div className='text-center'>{children}</div>;
};

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <div
      className={clsx(
        'text-6xl md:text-8xl my-6 mb-8 text-gradient',
        className
      )}
    >
      {children}
    </div>
  );
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <div
      className={clsx(
        'text-lg md:text-xl mb-12 text-secondary-text',
        className
      )}
    >
      {children}
    </div>
  );
};
