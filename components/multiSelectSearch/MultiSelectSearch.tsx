'use client';
import React, { useState } from 'react';
import SelectList from './subComponents/SelectList';
import SearchBar from './subComponents/SearchBar';

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
      <SearchBar options={options} value={value} setValue={setValue} search={search} setSearch={setSearch} setFilteredOptions={setFilteredOptions} />
      <SelectList filteredOptions={filteredOptions} value={value} setValue={setValue} search={search} setSearch={setSearch} />
    </div>
  );
}
