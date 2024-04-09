'use client';
import React, { useState } from 'react';
import SelectList from './subComponents/SelectList';
import SearchBar from './subComponents/SearchBar';

export type SelectOption = {
  value: string;
  label: string;
  img?: string;
  episode?: number;
};

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption[];
  setValue: React.Dispatch<React.SetStateAction<SelectOption[] | undefined>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  loading: boolean;
};

export default function MultiSelectSearch({ options, value, setValue, search, setSearch, error, loading }: SelectProps) {
  // filtered options based on the search value
  const [filteredOptions, setFilteredOptions] = useState(options);

  return (
    <div className='w-full'>
      <SearchBar options={options} value={value} setValue={setValue} search={search} setSearch={setSearch} setFilteredOptions={setFilteredOptions} />
      {error && <div className='bg-red-400 p-2 text-white'>Error: {error}</div>}
      {loading && <div className='bg-blue-400 p-2 text-white'>Loading...</div>}
      <SelectList filteredOptions={filteredOptions} value={value} setValue={setValue} search={search} setSearch={setSearch} />
    </div>
  );
}
