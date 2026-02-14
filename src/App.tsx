import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import LoadingSpinner from '@/components/LoadingSpinner';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import Lenis from 'lenis';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleLoad = () => setIsLoading(false);

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timeout in case load event doesn't fire or is too fast to notice
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
        lenis.destroy();//scroller
      };
    }
  }, []);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      {isLoading && <LoadingSpinner />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* Add more routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
