import { Fira_Sans } from 'next/font/google';

const fira_sans = Fira_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-fira-sans',
})

export const fonts = {
  fira_sans,
}
