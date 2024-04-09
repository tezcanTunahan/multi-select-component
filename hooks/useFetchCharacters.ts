import { useEffect, useState } from 'react';
import { fetchCharacters } from '@/services/rickAndMortyService';
import { SelectOption } from '@/components/multiSelectSearch/MultiSelectSearch';

const useFetchCharacters = (search: string) => {
  const [options, setOptions] = useState<SelectOption[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // If search is empty, do not make a request
    if (!search.trim()) return;

    setLoading(true);
    setError('');
    fetchCharacters(search)
      .then((characters) => {
        const mappedOptions: SelectOption[] = characters.map(({ id, name, image, episode }) => ({
          value: id.toString(),
          label: name,
          img: image,
          episode: episode.length,
        }));
        setOptions(mappedOptions);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch characters !!!');
      })
      .finally(() => setLoading(false));
  }, [search]);

  return { options, loading, error };
};

export { useFetchCharacters };
