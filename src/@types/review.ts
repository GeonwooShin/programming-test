export type AuthorDetails = {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number;
};

export type Review = {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type MovieReviews = {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
};
