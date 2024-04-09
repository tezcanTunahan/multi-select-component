import { useEffect } from 'react';

const useKeyboardNavigation = (setSearch: (search: string) => void) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSearch('');
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 'nextElementSibling' : 'previousElementSibling';
        const focusedElement = document.activeElement?.[direction] as HTMLElement | null;
        focusedElement?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setSearch]);
};

export default useKeyboardNavigation;
