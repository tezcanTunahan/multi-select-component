import React from 'react';
import HighlightSubstring from './HighlightSubstring';
import { SelectOption } from '../MultiSelectSearch';
import useKeyboardNavigation from '@/hooks/useKeyboardNavigation';
import { cn } from '@/lib/utils';

type Props = {
  options: SelectOption[];
  value: SelectOption[];
  setValue: React.Dispatch<React.SetStateAction<SelectOption[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  errorMassage?: string;
  loading?: boolean;
};

export default function SelectList({ options, value, setValue, search, setSearch, errorMassage, loading }: Props) {
  useKeyboardNavigation(setSearch);

  if (errorMassage) {
    return (
      <div className=' text-white relative'>
        <p className='absolute top-0 bg-red-400 p-2 w-full'>{errorMassage}</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div className=' text-white relative'>
        <p className='absolute top-0 bg-sky-400 p-2 w-full'>...loading</p>
      </div>
    );
  }
  return (
    <ul className='flex flex-col  relative'>
      {search.length > 0 &&
        options.map((option, index) => (
          <button
            id='button'
            className={cn(
              'flex items-center gap-2 cursor-pointer hover:bg-gray-200 bg-gray-50 p-2 absolute z-10 w-full rounded-md border border-gray-200',
              value?.some((opt: any) => opt.value === option.value) ? 'bg-gray-300' : ''
            )}
            style={{ top: `${index * 4}rem` }}
            key={option.value}
            onClick={() => {
              setSearch('');
              setValue((prevValue: SelectOption[]) => {
                if (prevValue?.some((opt: SelectOption) => opt.value === option.value)) {
                  return prevValue?.filter((opt: SelectOption) => opt.value !== option.value);
                }
                return [...prevValue, option];
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
