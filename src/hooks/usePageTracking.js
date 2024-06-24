// hooks/usePageTracking.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const usePageTracking = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-SMP5VDXS3M', {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

export default usePageTracking;
