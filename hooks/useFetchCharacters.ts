import { useEffect, useState } from 'react';
import { fetchCharacters } from '@/services/rickAndMortyService';

export interface SelectOption {
  value: string;
  label: string;
  img: string;
  episode: number;
}

const useFetchCharacters = (search: string) => {
  const [options, setOptions] = useState<SelectOption[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
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
