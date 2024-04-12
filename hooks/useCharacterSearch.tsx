import { useState } from 'react';
import { fetchCharacters } from '@/services/rickAndMortyService';
import { SelectOption } from '@/components/multiSelectSearch/MultiSelectSearch';

const useCharacterSearch = () => {
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
          setErrorMessage(error.message);
          setLoading(false);
        });
      clearTimeout(getData);
    }, 1000);
  };

  return { options, loading, errorMessage, handleSearch };
};

export default useCharacterSearch;
