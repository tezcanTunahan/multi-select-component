import React from 'react';
import HighlightSubstring from './HighlightSubstring';
import { SelectOption } from '../MultiSelectSearch';
import useKeyboardNavigation from '@/hooks/useKeyboardNavigation';

type SelectOptionProps = {
  options: any[];
  value: any;
  setValue: any;
  search: string;
  setSearch: any;
};

export default function SelectList({ options, value, setValue, search, setSearch }: SelectOptionProps) {
  // Custom hook to handle keyboard navigation
  useKeyboardNavigation(setSearch);

  return (
    <ul className='flex flex-col gap-2'>
      {search.length > 0 &&
        options.map((option) => (
          <button
            id='button'
            className={`flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 ${
              value?.some((opt: any) => opt.value === option.value) ? 'bg-gray-300' : ''
            }  `}
            key={option.value}
            onClick={() => {
              setValue((prevValue: SelectOption[] | undefined) => {
                if (prevValue?.some((opt: SelectOption) => opt.value === option.value)) {
                  return prevValue?.filter((opt: any) => opt.value !== option.value);
                }
                // setSearch('');
                return [...(prevValue || []), option];
              });
            }}>
            <img src={option.img} alt={option.label} className='w-10 h-10 rounded-md' />
            <div className='flex items-start flex-col'>
              <HighlightSubstring mainString={option.label} substring={search} />
              <p className=' text-sm text-gray-500'>{option.episode} Episodes</p>
            </div>
          </button>
        ))}
    </ul>
  );
}
