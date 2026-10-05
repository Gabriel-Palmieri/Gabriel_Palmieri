'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { PageLoading } from './PageLoading';

export function InitialLoading({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let active = true;
    let minimumElapsed = false;
    let pageLoaded = document.readyState === 'complete';
    let fontsLoaded = document.fonts.status === 'loaded';
    const finish = () => {
      if (active && minimumElapsed && pageLoaded && fontsLoaded)
        setLoading(false);
    };
    const minimum = window.setTimeout(() => {
      minimumElapsed = true;
      finish();
    }, 650);
    const onLoad = () => {
      pageLoaded = true;
      finish();
    };
    window.addEventListener('load', onLoad);
    void document.fonts.ready.then(() => {
      fontsLoaded = true;
      finish();
    });
    // Slow external resources must never block access to the portfolio.
    const timeout = window.setTimeout(() => {
      if (active) setLoading(false);
    }, 3000);

    return () => {
      active = false;
      window.clearTimeout(minimum);
      window.clearTimeout(timeout);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return (
    <>
      {loading && <PageLoading />}
      <div inert={loading} aria-busy={loading}>
        {children}
      </div>
    </>
  );
}
