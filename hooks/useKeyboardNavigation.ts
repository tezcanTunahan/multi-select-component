import { useEffect } from 'react';

const useKeyboardNavigation = (setSearch: React.Dispatch<React.SetStateAction<string>>) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 'nextElementSibling' : 'previousElementSibling';
        const focusedElement = document.activeElement?.[direction] as HTMLElement | null;
        focusedElement?.focus();
      } else if (event.key === 'Escape') {
        setSearch('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
};

export default useKeyboardNavigation;
