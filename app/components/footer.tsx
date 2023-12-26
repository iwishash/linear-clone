import Link from 'next/link';
import Container from './container';
import Logo from './icons/logo';
import { Twitter, Github, Slack } from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    Links: [
      { title: 'Features', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'Changelog', href: '#' },
      { title: 'Docs', href: '#' },
      { title: 'Linear Method', href: '#' },
      { title: 'Download', href: '#' },
    ],
  },
  {
    title: 'Company',
    Links: [
      { title: 'About us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Brand', href: '#' },
    ],
  },
  {
    title: 'Resources',
    Links: [
      { title: 'Community', href: '#' },
      { title: 'Contact', href: '#' },
      { title: 'DPA', href: '#' },
      { title: 'Privacy Policy', href: '#' },
      { title: 'Terms of service', href: '#' },
      { title: 'Report a vulnerability', href: '#' },
    ],
  },
  {
    title: 'Developers',
    Links: [
      { title: 'API', href: '#' },
      { title: 'Status', href: '#' },
      { title: 'GitHub', href: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className='border-t border-transparent-white py-[5.6rem] mt-[5rem] text-sm'>
      <Container className='flex flex-col lg:flex-row justify-between'>
        <div>
          <div className='flex h-full flex-row lg:flex-col justify-between'>
            <div className='flex text-grey items-center'>
              <Logo className='h-4' />
              <span className='text-sm'>- Designed Wordwide</span>
            </div>
            <div className='flex gap-x-3 text-grey mt-auto'>
              <Twitter size={18} />
              <Github size={18} />
              <Slack size={18} />
            </div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {footerLinks.map(({ title, Links }) => (
            <div key={title} className='min-w-[18rem] mt-10 lg:mt-0'>
              <h3 className='font-medium'>{title}</h3>
              <ul className='mt-3'>
                {Links.map(({ title, href }) => (
                  <li
                    key={title}
                    className='mb-2 text-grey block last:mb-0 hover:text-white transition-colors'
                  >
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
