import instance from '@apis/instance';
import { useSuspenseQuery } from '@tanstack/react-query';
import { CONFIG } from '@config';
import { MovieDetails, MovieProps } from 'src/@types/movie';
import { MovieReviews } from 'src/@types/review';

export const useGetLikedMovies = () => {
  return useSuspenseQuery({
    queryKey: ['likedMovies'],
    queryFn: async (): Promise<MovieProps[]> => {
      const { data } = await instance.get(
        `account/${CONFIG.ACCOUNT_ID}/favorite/movies`,
      );
      return data;
    },
  });
};

export const useGetAllMovies = (page: number, genres: string = '28') => {
  return useSuspenseQuery({
    queryKey: ['allMovies'],
    queryFn: async (): Promise<MovieProps[]> => {
      const { data } = await instance.get(
        `discover/movie?page=${page}&with_genres=${genres}`,
      );
      return data;
    },
  });
};

export const useGetMovieDetail = (movie_id: number) => {
  return useSuspenseQuery({
    queryKey: ['allMovies'],
    queryFn: async (): Promise<MovieDetails> => {
      const { data } = await instance.get(`movie/${movie_id}`);
      return data;
    },
  });
};

export const useGetMovieReviews = (movie_id: number) => {
  return useSuspenseQuery({
    queryKey: ['reviews'],
    queryFn: async (): Promise<MovieReviews> => {
      const { data } = await instance.get(`movie/${movie_id}/reviews`);
      return data;
    },
  });
};

export const useGetRecommendation = (movie_id: number) => {
  return useSuspenseQuery({
    queryKey: ['recommandations'],
    queryFn: async (): Promise<MovieProps[]> => {
      const { data } = await instance.get(`movie/${movie_id}/recommendations`);
      return data;
    },
  });
};
