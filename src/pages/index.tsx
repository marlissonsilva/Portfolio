import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Projects from '@/components/Projects';
import Certificate from '@/components/Certificate';
import Footer from '@/components/Footer';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [theme, setTheme] = useState('dark');
  function handleChangeTheme() {
    theme === 'dark' ? setTheme('') : setTheme('dark');
  }
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Meu nome é Marlisson , sou desenvolvedor frontend, estudante de análise e desenvolvimento de sistemas."
        />
        <meta
          name="keywords"
          content="html, css, javascript, marlisson silva, portfólio, frontend, marlisson, desenvolvimento, desenvolvedor, developer, sites, website, desenvolvimento web "
        />
        <meta name="author" content="Marlisson Silva" />
        <title>Portfólio/Marlisson Silva</title>
      </Head>
      <div className={` ${theme}`}>
        <main className=" text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 relative">
          <Header
            onClick={handleChangeTheme}
            theme={theme}
            className="fixed w-full z-10 bg-white dark:bg-zinc-800"
          />
          <Banner className="section min-h-screen sm:h-screen max-h-[1200px]" />
          <Projects className="wrapper flex flex-col items-center   " />
          <Certificate className="wrapper limit-height flex flex-col items-center " />
          <Footer />
        </main>
      </div>
    </>
  );
}
