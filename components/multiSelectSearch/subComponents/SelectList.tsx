import React from 'react';
import HighlightSubstring from './HighlightSubstring';
import { SelectOption } from '../MultiSelectSearch';
import useKeyboardNavigation from '@/hooks/useKeyboardNavigation';

type Props = {
  options: any[];
  value: any;
  setValue: any;
  search: string;
  setSearch: any;
  errorMassage: string;
  loading: boolean;
};

export default function SelectList({ options, value, setValue, search, setSearch, errorMassage, loading }: Props) {
  useKeyboardNavigation(setSearch);

  if (errorMassage) {
    return <div className='bg-red-400 p-2 text-white'>{errorMassage}</div>;
  }
  if (loading) {
    return <div className='bg-blue-400 p-2 text-white'>Loading...</div>;
  }
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
                return [...(prevValue || []), option];
              });
            }}>
            <img src={option.img} alt={option.label} className='w-10 h-10 rounded-md' />
            <div className='flex items-start flex-col'>
              <HighlightSubstring mainString={option.label} substring={search} />
              <p className=' text-sm text-gray-500'>{option.subTitle}</p>
            </div>
          </button>
        ))}
    </ul>
  );
}
