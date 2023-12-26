'use client';

import Link from 'next/link';
import Container from './container';
import Logo from './icons/logo';
import Button from './button';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    if (hamburgerMenuIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHambergerMenu = () => {
      setHamburgerMenuIsOpen(false);
    };
    window.addEventListener('resize', closeHambergerMenu);
    window.addEventListener('orientationchange', closeHambergerMenu);
    return () => {
      window.removeEventListener('resize', closeHambergerMenu);
      window.removeEventListener('orientationchange', closeHambergerMenu);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header className='fixed top-0 left-0 w-full border-b border-transparent-white backdrop-blur-xl z-40'>
      <Container className='flex h-navigation-height items-center'>
        <Link href='/'>
          <Logo className='h-[18px]' />
        </Link>
        <div
          className={clsx(
            'transition-[visibility] md:visible',
            hamburgerMenuIsOpen ? 'visible' : 'invisible delay-500'
          )}
        >
          <nav
            className={clsx(
              'fixed md:opacity-100 transition-opacity duration-500 md:relative h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto md:block top-navigation-height md:top-0 left-0 bg-background md:bg-transparent md:h-auto md:w-auto md:translate-x-0',
              hamburgerMenuIsOpen
                ? 'translate-x-0 opacity-100 '
                : 'translate-x-[-100vw] opacity-0'
            )}
          >
            <ul
              className={clsx(
                'ease-in h-full flex flex-col md:flex-row md:items-center [&_a]:text-md',
                '[&_a]:h-navigation-height [&_a]:duration-300 [&_a]:translate-y-8 md:[&_a]:translate-y-0 [&_a]:w-full [&_a]:flex [&_a]:items-center [&_a]:border-b [&_a]:border-grey-dark md:[&_a]:border-none [&_a:hover]:text-grey [&_a]:transition-[colors, transform] [&_a]:md:transition-colors [&_li]:ml-6 md:[&_a]:text-sm',
                hamburgerMenuIsOpen && '[&_a]:translate-y-0'
              )}
            >
              <li>
                <Link href={'#'}>Features</Link>
              </li>
              <li>
                <Link href={'#'}>Method</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href={'#'}>Customers</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href={'#'}>Changelog</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href={'#'}>Interations</Link>
              </li>
              <li>
                <Link href={'#'}>Pricing</Link>
              </li>
              <li>
                <Link href={'#'}>Contact</Link>
              </li>
              <li>
                <Link href={'#'}>Company</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='flex items-center ml-auto gap-x-4'>
          <Link
            className='text-sm hover:text-grey transition-colors'
            href={'#'}
          >
            Log in
          </Link>
          <Button href='#' size='medium'>
            Sign up
          </Button>
        </div>
        <button
          className='block ml-6 md:hidden'
          onClick={() => {
            setHamburgerMenuIsOpen((open) => !open);
          }}
        >
          <span className='sr-only'>Toggle Menu</span>
          <Menu />
        </button>
      </Container>
    </header>
  );
};

export default Header;
