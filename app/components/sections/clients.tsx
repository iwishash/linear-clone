import clsx from 'clsx';
import Container from '../container';
import { AlanLogo } from '../logos/alan';
import { ArcLogo } from '../logos/arc';
import { CashAppLogo } from '../logos/cashapp';
import { DescriptLogo } from '../logos/descript';
import { LoomLogo } from '../logos/loom';
import { MercuryLogo } from '../logos/mercury';
import { OpenSeaLogo } from '../logos/opensea';
import { PitchLogo } from '../logos/pitch';
import { RampLogo } from '../logos/ramp';
import { RaycastLogo } from '../logos/raycast';
import { RetoolLogo } from '../logos/retool';
import { VercelLogo } from '../logos/vercel';

const Clients = () => {
  return (
    <>
      <Container>
        <div className='mb-12'>
          <p className='text-center text-white text-lg md:text-xl'>
            <span className='text-secondary-text'>
              Powering the world’s best product teams.
            </span>
            <br className='hidden md:block' /> From next-gen startups to
            established enterprises.
          </p>
        </div>
        <div
          className={clsx(
            'flex justify-around flex-wrap gap-x-6 gap-y-8',
            '[&_svg]:max-w-[16rem] md:[&_svg]:basis-[calc(16.66%-20px)]'
          )}
        >
          <AlanLogo className='hidden md:block' />
          <ArcLogo />
          <CashAppLogo />
          <DescriptLogo className='hidden md:block' />
          <LoomLogo />
          <MercuryLogo className='hidden md:block' />
          <OpenSeaLogo className='hidden md:block' />
          <PitchLogo className='hidden md:block' />
          <RampLogo />
          <RaycastLogo className='hidden md:block' />
          <RetoolLogo />
          <VercelLogo />
        </div>
      </Container>
    </>
  );
};

export default Clients;
