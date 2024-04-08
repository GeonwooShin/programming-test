import instance from '@apis/instance';
import { useSuspenseQuery } from '@tanstack/react-query';
import { CONFIG } from '@config';
import {
  MoviesResponse,
  MovieDetails,
  MovieProps,
  MovieAccountState,
} from 'src/@types/movie';
import { MovieReviews } from 'src/@types/review';

export const useGetLikedMovies = () => {
  return useSuspenseQuery({
    queryKey: ['likedMovies'],
    queryFn: async (): Promise<MoviesResponse> => {
      const { data } = await instance.get(
        `account/${CONFIG.ACCOUNT_ID}/favorite/movies`,
      );
      return data;
    },
  });
};

export const useGetAllMovies = (page: number, genres: string = '') => {
  return useSuspenseQuery({
    queryKey: ['allMovies', genres, page],
    queryFn: async (): Promise<MoviesResponse> => {
      const { data } = await instance.get(
        `discover/movie?page=${page}&with_genres=${genres}`,
      );
      return data;
    },
  });
};

export const useGetMovieDetail = (movie_id: string) => {
  return useSuspenseQuery({
    queryKey: ['allMovies', movie_id],
    queryFn: async (): Promise<MovieDetails> => {
      const { data } = await instance.get(`movie/${movie_id}`);
      return data;
    },
  });
};

export const useGetMovieReviews = (movie_id: string) => {
  return useSuspenseQuery({
    queryKey: ['reviews', movie_id],
    queryFn: async (): Promise<MovieReviews> => {
      const { data } = await instance.get(`movie/${movie_id}/reviews`);
      return data;
    },
  });
};

export const useGetRecommendation = (movie_id: string) => {
  return useSuspenseQuery({
    queryKey: ['recommandations', movie_id],
    queryFn: async (): Promise<MovieProps[]> => {
      const { data } = await instance.get(`movie/${movie_id}/recommendations`);
      return data.results;
    },
  });
};

export const useGetMovieState = (movie_id: string) => {
  return useSuspenseQuery({
    queryKey: ['movieState', movie_id],
    queryFn: async (): Promise<MovieAccountState> => {
      const { data } = await instance.get(`movie/${movie_id}/account_states`);
      return data;
    },
  });
};
