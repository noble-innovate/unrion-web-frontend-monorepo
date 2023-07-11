import { ReactNode } from 'react';

import NavBar from '@website/components/layout/navbar';

import '@packages/ui/styles/globals.css';
import '@website/globals.css';

import Footer from '@website/components/layout/footer';
import { localeContents } from '@website/locale-contents/utils';

export const metadata = {
  title: 'Empowering Your Job Search and Beyond',
  description:
    'unriʘn is dedicated to helping you find the right job that aligns with your skills and aspirations. Our user-friendly platform provides a seamless job search experience, empowering you to take control of your career journey',
};

export interface IWebsiteNavLinks {
  id: string;
  title: string;
  link: string;
  nav: boolean;
  footerGroup: number;
}

interface IRootLayout {
  children: ReactNode;
  params: { lang: Locale };
}

export default async function RootLayout({ children, params }: IRootLayout) {
  const { infoBar, websiteNavLinks, footer: footerContent } = localeContents.en;

  return (
    <html lang={'en'}>
      <body className='bg-white min-h-screen'>
        <header className='bg-rose-50 sticky top-0 z-50'>
          <NavBar websiteNavLinks={websiteNavLinks} infoBar={infoBar} />
        </header>

        {children}
        <footer className='border-t border-gray-200 sticky top-full'>
          <Footer {...footerContent} websiteNavLinks={websiteNavLinks} />
        </footer>
      </body>
    </html>
  );
}
