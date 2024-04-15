'use client';
import React, { useState } from 'react';
import MultiSelectSearch, { SelectOption } from '@/components/multiSelectSearch/MultiSelectSearch';
import Link from 'next/link';
import useCharacterSearch from '@/hooks/useCharacterSearch';

export default function Home() {
  const [value, setValue] = useState<SelectOption[]>([]);
  const { options, loading, errorMessage, handleSearch } = useCharacterSearch();

  return (
    <main className='flex flex-col items-center justify-center mt-24'>
      <div className='mb-10'>
        <h1 className='text-4xl mb-10'>
          Created by
          <Link href={process.env.NEXT_PUBLIC_CREATOR_WEBSITE_URL || '#'} target='_blank' className='text-sky-500 hover:text-sky-700 font-semibold'>
            {' '}
            Tunahan tezcan
          </Link>
        </h1>
        <p>
          This is a simple example of a multi-select-input component. It uses the{' '}
          <Link href='https://rickandmortyapi.com/' target='_blank' className='text-sky-500 hover:text-sky-700 font-semibold'>
            Rick and Morty API
          </Link>{' '}
          to search for characters.
        </p>

        <p>
          To see the source code, visit the
          <Link
            href='https://github.com/tezcanTunahan/multi-select-component'
            target='_blank'
            className='text-sky-500 hover:text-sky-700 font-semibold'>
            {' '}
            github page
          </Link>
        </p>
        <p>
          You can also check out the
          <Link href='https://www.npmjs.com/package/multi-select-input' target='_blank' className='text-sky-500 hover:text-sky-700 font-semibold'>
            {' '}
            npm package
          </Link>
        </p>
        <p>
          and the source code of the package
          <Link
            href='https://github.com/tezcanTunahan/multi-select-component-package'
            target='_blank'
            className='text-sky-500 hover:text-sky-700 font-semibold'>
            {' '}
            npm package source code
          </Link>
        </p>
      </div>

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
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </div>
    </main>
  );
}
