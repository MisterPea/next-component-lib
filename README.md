## Component Lib -- A component library designed for React and Next.js 📓

#### Installation...

#### Basic Usage...

#### Including Fonts...
##### Google Fonts:
For practical use, it's best to create utility function that handles the importing/exporting of Google Fonts. This export can then be passed into the component you're implementing.
```
# .../src/fonts.ts
import { Inter, Roboto_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});
```
```
# ../app/page/page.tsx
import { roboto_mono } from './fonts';
import ButtonMain from '...component lib'

export default function Page() {
  return (
    <>
      <ButtonMain font={roboto_mono} label='My Button' />
    </>
  );
}
```
