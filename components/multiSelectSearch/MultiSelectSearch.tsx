'use client';
import React, { useState } from 'react';
import SelectList from './subComponents/SelectList';
import SearchBar from './subComponents/SearchBar';
import Loading from '../Loading';
import Error from '../Error';

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
  error?: string;
  loading?: boolean;
};

export default function MultiSelectSearch({ options, value, setValue, search, setSearch, error, loading }: SelectProps) {
  // filtered options based on the search value
  const [filteredOptions, setFilteredOptions] = useState(options);

  return (
    <div className='w-full'>
      <SearchBar options={options} value={value} setValue={setValue} search={search} setSearch={setSearch} setFilteredOptions={setFilteredOptions} />
      <SelectList filteredOptions={filteredOptions} value={value} setValue={setValue} search={search} setSearch={setSearch} />
      {loading && <Loading />}
      {error && <Error />}
    </div>
  );
}
