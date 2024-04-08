'use client';
import React, { useEffect, useState } from 'react';
import MultiSelectSearch, { SelectOption } from '@/components/multiSelectSearch/MultiSelectSearch';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  // State for the options
  const [options, setOptions] = useState<SelectOption[]>([]);
  // State for the selected values
  const [value, setValue] = useState<SelectOption[] | undefined>([]);

  //  Fetch data from the API
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then((res) => {
      setOptions(
        res.data.results.map((character: any) => ({
          value: character.id.toString(),
          label: character.name,
          img: character.image,
          episode: character.episode.length,
        }))
      );
    });
  }, []);

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
        <MultiSelectSearch value={value} setValue={setValue} options={options} />
      </div>
    </main>
  );
}
