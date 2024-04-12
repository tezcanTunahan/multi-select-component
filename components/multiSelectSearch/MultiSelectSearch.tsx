'use client';
import React, { useState } from 'react';
import SelectList from './subComponents/SelectList';
import SearchBar from './subComponents/SearchBar';
import { cn } from '@/lib/utils';

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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  loading?: boolean;
  errorMessage?: string;
};

export default function MultiSelectSearch({ options, errorMessage, loading, onChange, value, setValue, className }: Props) {
  const [search, setSearch] = useState<string>('');

  return (
    <div className={cn('w-full', className)}>
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
