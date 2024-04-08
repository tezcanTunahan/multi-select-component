import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import InputSelectedElement from './InputSelectedElement';
export default function SearchBar({
  options,
  value,
  setValue,
  search,
  setSearch,
  setFilteredOptions,
}: {
  options: any;
  value: any;
  setValue: any;
  search: any;
  setSearch: any;
  setFilteredOptions: any;
}) {
  return (
    <div className='border border-gray-600 p-2 rounded-md min-h-14 mb-4 flex flex-row  items-center justify-between gap-2  shadow-md'>
      <div className='flex flex-wrap gap-2'>
        {/* Show the selected elements in the input */}
        {value?.map((option: any) => (
          <InputSelectedElement key={option.value} value={option} setValue={setValue} />
        ))}
        {/* Input to search the options */}
        <input
          className=' border-none outline-none min-w-1/3  '
          value={search}
          placeholder='Search...'
          onChange={(e) => {
            setSearch(e.target.value);
            setFilteredOptions(options.filter((option: any) => option.label.toLowerCase().includes(e.target.value.toLowerCase())));
          }}
        />
      </div>
      {/* Dropdown icon */}
      <IoMdArrowDropdown className='min-w-10 text-2xl ' />
    </div>
  );
}
