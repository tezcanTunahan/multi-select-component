import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import InputSelectedElement from './InputSelectedElement';
import { SelectOption } from '../MultiSelectSearch';

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption[];
  setValue: React.Dispatch<React.SetStateAction<SelectOption[] | undefined>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setFilteredOptions: React.Dispatch<React.SetStateAction<SelectOption[]>>;
};

export default function SearchBar({ options, value, setValue, search, setSearch, setFilteredOptions }: SelectProps) {
  return (
    <div className='border border-gray-600 p-2 rounded-md min-h-14 mb-4 flex flex-row  items-center justify-between gap-2  shadow-md'>
      <div className='flex flex-wrap gap-2'>
        {/* Show the selected elements in the input */}
        {value?.map((option) => (
          <InputSelectedElement key={option.value} value={option} setValue={setValue} />
        ))}

        <input
          className='border-none outline-none min-w-1/3'
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
  );
}
