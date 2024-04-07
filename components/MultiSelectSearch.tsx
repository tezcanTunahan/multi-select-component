'use client';
import React from 'react';
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

export default function MultiSelectSearch({ value, setValue, options }: SelectProps) {
  const [search, setSearch] = React.useState('');
  const [filteredOptions, setFilteredOptions] = React.useState(options);
  return (
    <div className='w-full'>
      <div className='border border-gray-600 p-2 rounded-xl w-full mb-4 flex items-center gap-2 '>
        {value?.map((option) => (
          <InputSelectedElement key={option.value} value={option} setValue={setValue} />
        ))}
        <input
          className='w-full border-none outline-none'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setFilteredOptions(options.filter((option) => option.label.toLowerCase().includes(e.target.value.toLowerCase())));
          }}
        />
        <IoMdArrowDropdown className='min-w-10 text-2xl ' />
      </div>
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

const InputSelectedElement = ({
  value,
  setValue,
}: {
  value: SelectOption;
  setValue: React.Dispatch<React.SetStateAction<SelectOption[] | undefined>>;
}) => {
  return (
    <div className='flex items-center bg-gray-300 py-1 px-3 gap-2 rounded-xl '>
      <p className='font-semibold text-sm flex min-w-max'>{value.label.length > 10 ? value.label.substring(0, 10) + '...' : value.label}</p>
      <button
        onClick={() => {
          setValue((prevValue: SelectOption[] | undefined) => {
            return prevValue?.filter((opt: any) => opt.value !== value.value);
          });
        }}
        className='bg-gray-500 px-3 py-1 text-white rounded-md'>
        x
      </button>
    </div>
  );
};
