'use client';
import React, { useState } from 'react';
import SelectList from './subComponents/SelectList';
import SearchBar from './subComponents/SearchBar';

export type SelectOption = {
  value: string;
  label: string;
  img?: string;
  subTitle?: string;
};

type Props = {
  options: SelectOption[];
  value: SelectOption[];
  setValue: React.Dispatch<React.SetStateAction<SelectOption[]>>;
  errorMessage: string;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MultiSelectSearch({ options, errorMessage, loading, onChange, value, setValue }: Props) {
  const [search, setSearch] = useState<string>('');

  return (
    <div className='w-full'>
      <SearchBar value={value} setValue={setValue} search={search} setSearch={setSearch} onChange={onChange} />
      <SelectList
        options={options}
        value={value}
        setValue={setValue}
        search={search}
        setSearch={setSearch}
        errorMassage={errorMessage}
        loading={loading}
      />
    </div>
  );
}
