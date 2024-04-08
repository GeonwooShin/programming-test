import { RefObject, useEffect, useState } from 'react';

interface UseContentHeightProps<T extends HTMLElement> {
  contentRef: RefObject<T>;
}

const useContentHeight = <T extends HTMLElement>({
  contentRef,
}: UseContentHeightProps<T>) => {
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, [contentRef]);

  return contentHeight;
};

export default useContentHeight;
