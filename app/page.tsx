'use client';
import React, { useState } from 'react';
import MultiSelectSearch, { SelectOption } from '@/components/multiSelectSearch/MultiSelectSearch';
import Link from 'next/link';
import { useFetchCharacters } from '@/hooks/useFetchCharacters';
import { MultiSelectInput } from 'multi-select-input';
import { fetchCharacters } from '@/services/rickAndMortyService';

export default function Home() {
  const [value, setValue] = useState<SelectOption[] | undefined>([]);
  // const { options, loading, error } = useFetchCharacters(search);
  const [options, setOptions] = useState<SelectOption[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSearch = (search: string) => {
    setLoading(true);
    setError('');
    fetchCharacters(search)
      .then((data) => {
        setOptions(
          data.map((character: any) => ({
            value: character.id,
            label: character.name,
            img: character.image,
            episode: character.episode.length,
          }))
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
        setError('Error fetching characters');
        setLoading(false);
      });
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
          error={error}
          loading={loading}
          onChange={(e) => {
            console.log('e.target.value', e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </div>
    </main>
  );
}
