'use client';
import React, { useState } from 'react';
import MultiSelectSearch, { SelectOption } from '@/components/multiSelectSearch/MultiSelectSearch';
import Link from 'next/link';
import { useFetchCharacters } from '@/hooks/useFetchCharacters';
import { MultiSelectInput } from 'multi-select-input';

export default function Home() {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState<SelectOption[] | undefined>([]);
  const { options, loading, error } = useFetchCharacters(search);

  return (
    <main className='flex flex-col items-center justify-center mt-24'>
      <p>
        Created by
        <Link href={process.env.NEXT_PUBLIC_CREATOR_WEBSITE_URL || '#'} target='_blank' className='text-gray-500 hover:text-gray-950 font-semibold'>
          {' '}
          Tunahan tezcan
        </Link>
      </p>
      <div className='w-10/12 md:w-6/12'>
        <MultiSelectSearch
          value={value}
          setValue={setValue}
          options={options}
          search={search}
          setSearch={setSearch}
          error={error}
          loading={loading}
        />
      </div>
      <div>
        <MultiSelectInput value={value} setValue={setValue} options={options} search={search} setSearch={setSearch} error={error} loading={loading} />
      </div>
    </main>
  );
}
