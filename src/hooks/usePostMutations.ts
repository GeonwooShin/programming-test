import instance from '@apis/instance';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CONFIG } from '@config';
import { MovieAccountState } from 'src/@types/movie';

export const usePostLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['postLike'],
    mutationFn: ({
      media_id,
      favorite,
    }: {
      media_id: string;
      favorite: boolean;
    }): Promise<void> => {
      return instance.post(`account/${CONFIG.ACCOUNT_ID}/favorite`, {
        media_type: 'movie',
        media_id,
        favorite,
      });
    },
    onMutate: async ({
      media_id,
      favorite,
    }: {
      media_id: string;
      favorite: boolean;
    }) => {
      queryClient.cancelQueries({ queryKey: ['postLike'] });
      const prevContent = queryClient.getQueryData(['movieState', media_id]);
      queryClient.setQueryData(
        ['movieState', media_id],
        (old: MovieAccountState) => ({
          ...old,
          favorite,
        }),
      );
      return { prevContent };
    },
    onError: (err, { media_id }, context) => {
      queryClient.setQueryData(['movieState', media_id], context?.prevContent);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['movieState'] });
    },
  });
};
