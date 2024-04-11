'use client';
import React, { useState } from 'react';
import MultiSelectSearch, { SelectOption } from '@/components/multiSelectSearch/MultiSelectSearch';
import Link from 'next/link';
import { fetchCharacters } from '@/services/rickAndMortyService';

export default function Home() {
  const [value, setValue] = useState<SelectOption[] | undefined>([]);
  const [options, setOptions] = useState<SelectOption[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSearch = (search: string) => {
    setLoading(true);
    setErrorMessage('');
    const getData = setTimeout(() => {
      fetchCharacters(search)
        .then((data) => {
          setOptions(
            data.map((character: any) => ({
              value: character.id,
              label: character.name,
              img: character.image,
              subTitle: character.episode.length + ' Episodes',
            }))
          );
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching characters:', error);
          setErrorMessage('Error fetching characters');
          setLoading(false);
        });
      clearTimeout(getData);
    }, 1000);
  };

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
          errorMessage={errorMessage}
          loading={loading}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
    </main>
  );
}
