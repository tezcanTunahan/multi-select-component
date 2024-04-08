'use client';
import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import InputSelectedElement from './InputSelectedElement';
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
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function MultiSelectSearch({ options, value, setValue, search, setSearch }: SelectProps) {
  // filtered options based on the search value
  const [filteredOptions, setFilteredOptions] = useState(options);

  return (
    <div className='w-full'>
      {/* Input to show the selected elements } */}
      <div className='border border-gray-600 p-2 rounded-md min-h-14 mb-4 flex flex-row  items-center justify-between gap-2  shadow-md'>
        <div className='flex flex-wrap gap-2'>
          {/* Show the selected elements in the input */}
          {value?.map((option) => (
            <InputSelectedElement key={option.value} value={option} setValue={setValue} />
          ))}
          {/* Input to search the options */}
          <input
            className=' border-none outline-none min-w-1/3  '
            value={search}
            placeholder='Search...'
            onChange={(e) => {
              setSearch(e.target.value);
              setFilteredOptions(options.filter((option) => option.label.toLowerCase().includes(e.target.value.toLowerCase())));
            }}
          />
        </div>
        {/* Dropdown icon */}
        <IoMdArrowDropdown className='min-w-10 text-2xl ' />
      </div>
      {/* List of options to select from */}
      <ul className='flex flex-col gap-2'>
        {search.length > 0 &&
          filteredOptions.map((option) => (
            <button
              className={`flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 ${
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
              <img src={option.img} alt={option.label} className='w-10 h-10 rounded-md' />
              <div className='flex items-start flex-col'>
                <HighlightSubstring mainString={option.label} substring={search} />
                <p className=' text-sm text-gray-500'>{option.episode} Episodes</p>
              </div>
            </button>
          ))}
      </ul>
    </div>
  );
}
