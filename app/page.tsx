'use client';
import React, { useState } from 'react';
import MultiSelectSearch, { SelectOption } from '@/components/multiSelectSearch/MultiSelectSearch';
import Link from 'next/link';
import { useFetchCharacters } from '@/hooks/useFetchCharacters';

export default function Home() {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState<SelectOption[] | undefined>([]);
  const { options, loading, error } = useFetchCharacters(search);
  const myWebsiteUrl = process.env.NEXT_PUBLIC_CREATOR_WEBSITE_URL as string;

  return (
    <main className='flex flex-col items-center justify-center mt-24'>
      <p>
        Created by
        <Link href={myWebsiteUrl} target='_blank' className='text-gray-500 hover:text-gray-950 font-semibold'>
          {' '}
          Tunahan tezcan
        </Link>
      </p>
      <div className='w-10/12 md:w-6/12'>
        <MultiSelectSearch value={value} setValue={setValue} options={options} search={search} setSearch={setSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
    </main>
  );
}
