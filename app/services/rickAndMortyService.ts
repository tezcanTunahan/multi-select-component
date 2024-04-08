// services/rickAndMortyService.ts
import axios from 'axios';

// Define the type for your character data for better type checking
type Character = {
  id: number;
  name: string;
  image: string;
  episode: string[];
};

// The function to fetch characters from the Rick and Morty API
export const fetchCharacters = async (search: string): Promise<Character[]> => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API}/character/?name=${search}`);
  return response.data.results;
};
