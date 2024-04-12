// services/rickAndMortyService.ts
import axios from 'axios';

// Verify environment variable
if (!process.env.NEXT_PUBLIC_RICK_AND_MORTY_API) {
  throw new Error('Rick and Morty API URL is not defined in environment variables');
}

// Define the type for your character data for better type checking
export type Character = {
  id: number;
  name: string;
  image: string;
  episode: string[];
};

type ApiResponse = {
  results: Character[];
};

// The function to fetch characters from the Rick and Morty API
export const fetchCharacters = async (search: string): Promise<Character[]> => {
  try {
    const response = await axios.get<ApiResponse>(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API}/character`, {
      params: {
        name: search,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw new Error('Error fetching characters');
  }
};
