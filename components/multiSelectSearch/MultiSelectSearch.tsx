'use client';
import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import HighlightSubstring from './HighlightSubstring';

export type SelectOption = {
  value: string;
  label: string;
  img?: string;
  episode?: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption[];
  setValue: React.Dispatch<React.SetStateAction<SelectOption[] | undefined>>;
};

export default function MultiSelectSearch({ options, value, setValue }: SelectProps) {
  // search state to filter the options
  const [search, setSearch] = useState('');
  // filtered options based on the search value
  const [filteredOptions, setFilteredOptions] = useState(options);

  return (
    <div className='w-full'>
      {/* Input to show the selected elements } */}
      <div className='border border-gray-600 p-2 rounded-xl  mb-4 flex flex-row  items-center justify-between gap-2  '>
        <div className='flex flex-wrap gap-2'>
          {value?.map((option) => (
            <InputSelectedElement key={option.value} value={option} setValue={setValue} />
          ))}
          <input
            className=' border-none outline-none w-1/3 '
            value={search}
            placeholder='Search...'
            onChange={(e) => {
              setSearch(e.target.value);
              setFilteredOptions(options.filter((option) => option.label.toLowerCase().includes(e.target.value.toLowerCase())));
            }}
          />
        </div>
        <IoMdArrowDropdown className='min-w-10 text-2xl ' />
      </div>
      {/* List of options to select from */}
      <ul className='flex flex-col gap-2'>
        {search.length > 0 &&
          filteredOptions.map((option) => (
            <button
              className={`flex items-center cursor-pointer hover:bg-gray-200 p-2 ${
                value?.some((opt) => opt.value === option.value) ? 'bg-gray-300' : ''
              }  `}
              key={option.value}
              onClick={() => {
                setValue((prevValue: SelectOption[] | undefined) => {
                  if (prevValue?.some((opt: SelectOption) => opt.value === option.value)) {
                    return prevValue?.filter((opt: any) => opt.value !== option.value);
                  }
                  setSearch('');
                  return [...(prevValue || []), option];
                });
              }}>
              <img src={option.img} alt={option.label} className='w-10 h-10 rounded-full' />
              <HighlightSubstring mainString={option.label} substring={search} />
              <p className='text-sm text-gray-500 ml-2'>{option.episode} Episodes</p>
            </button>
          ))}
      </ul>
    </div>
  );
}

// Component to show the selected elements in the input
const InputSelectedElement = ({
  value,
  setValue,
}: {
  value: SelectOption;
  setValue: React.Dispatch<React.SetStateAction<SelectOption[] | undefined>>;
}) => {
  return (
    <div className='flex items-center bg-gray-200 py-[5px] px-[10px] gap-2 rounded-md '>
      <p className=' text-sm flex min-w-max text-gray-700'>{value.label.length > 10 ? value.label.substring(0, 10) + '...' : value.label}</p>
      <button
        onClick={() => {
          setValue((prevValue: SelectOption[] | undefined) => {
            return prevValue?.filter((opt: any) => opt.value !== value.value);
          });
        }}
        className='bg-gray-500  px-[7px] text-white rounded-md'>
        x
      </button>
    </div>
  );
};
