// hooks/usePageTracking.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const usePageTracking = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Safety check: ensure gtag is loaded and available before calling
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-SMP5VDXS3M', {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

export default usePageTracking;
