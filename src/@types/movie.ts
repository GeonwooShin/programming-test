export type MoviesResponse = {
  page: number;
  results: MovieProps[];
  total_pages: number;
  total_results: number;
};

export type MovieProps = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: string[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Genre = {
  id: string;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: string;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieAccountState = {
  id: string;
  favorite: boolean;
  rated: boolean;
  watchlist: boolean;
};
