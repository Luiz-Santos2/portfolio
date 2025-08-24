import { useState, useEffect } from 'react';

export function useInitialLoad() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simula um carregamento inicial otimizado
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return isLoaded;
}
