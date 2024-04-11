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
  error: string;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MultiSelectSearch({ options, value, setValue, error, loading, onChange }: SelectProps) {
  const [search, setSearch] = useState('');

  return (
    <div className='w-full'>
      <SearchBar value={value} setValue={setValue} search={search} setSearch={setSearch} onChange={onChange} />
      {error && <div className='bg-red-400 p-2 text-white'>Error: {error}</div>}
      {loading && <div className='bg-blue-400 p-2 text-white'>Loading...</div>}
      {!loading && !error && <SelectList options={options} value={value} setValue={setValue} search={search} setSearch={setSearch} />}
    </div>
  );
}
