'use client';
import React, { useEffect, useState } from 'react';
import MultiSelectSearch, { SelectOption } from '@/components/multiSelectSearch/MultiSelectSearch';
import Link from 'next/link';
import { fetchCharacters } from './services/rickAndMortyService';

export default function Home() {
  const [options, setOptions] = useState<SelectOption[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // State for the selected values
  const [value, setValue] = useState<SelectOption[] | undefined>([]);

  // Fetch data from the API with the search value and set the options when the search value changes
  useEffect(() => {
    if (!search.trim()) return;
    setLoading(true);
    fetchCharacters(search)
      .then((characters) => {
        setOptions(
          characters.map((character) => ({
            value: character.id.toString(),
            label: character.name,
            img: character.image,
            episode: character.episode.length,
          }))
        );
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch characters');
      })
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <main className='flex flex-col items-center justify-center mt-24'>
      <p>
        Created by
        <Link href='https://www.tunahantezcan.com' target='_blank' className='text-gray-500 hover:text-gray-950 font-semibold'>
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
