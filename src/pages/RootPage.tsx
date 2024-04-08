import Footer from '@components/common/Footer';
import Header from '@components/common/Header';
import { ModalProvider } from '@context/ModalContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const RootPage = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        throwOnError: true,
        refetchOnWindowFocus: false,
      },
    },
  });
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === `/`) {
      navigate(`/movie-list`, { replace: true });
    }
  }, [pathname, navigate]);

  return (
    <ModalProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </ModalProvider>
  );
};

export default RootPage;
