'use client'
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Tools from "./components/Tools";
import Welcome from "./components/Welcome";
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../app/components/Preloader';
import Landing from '../app/components/Landing';
import Description from '../app/components/Description';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main className="">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing/>
      <Description/>
      <Welcome/>
      <Tools />
      <Footer />

      
    </main>
 
  );
}

