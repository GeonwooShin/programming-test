import instance from '@apis/instance';
import { useMutation } from '@tanstack/react-query';
import { CONFIG } from '@config';

export const usePostLike = () => {
  return useMutation({
    mutationKey: ['postLike'],
    mutationFn: ({
      media_id,
      favorite,
    }: {
      media_id: number;
      favorite: boolean;
    }): Promise<void> => {
      return instance.post(`account/${CONFIG.ACCOUNT_ID}/favorite`, {
        media_type: 'movie',
        media_id,
        favorite,
      });
    },
  });
};
