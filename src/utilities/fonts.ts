import { Roboto_Slab, IBM_Plex_Sans, Inter, Source_Sans_Pro } from 'next/font/google';

export const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap'
});

export const ibmPlexSans = IBM_Plex_Sans({
  weight: ['200'],
  subsets: ['latin'],
  display: 'swap',
});

export const interLight = Inter({
  weight: '300',
  subsets: ['latin'],
  display: 'swap'
});

export const interMed = Inter({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
});

export const sourceSansReg = Source_Sans_Pro({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});