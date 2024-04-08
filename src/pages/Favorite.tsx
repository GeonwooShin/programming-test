import FavoriteMovieList from '@components/Movie/FavoriteMovieList';
import Fallback from '@components/common/Fallback';
import Layout from '@components/common/Layout';
import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <StyledContainer>
        <StyledTabs>
          <StyledNoneActiveTab onClick={() => navigate('/')}>
            Movie List
            <StyledNoneActiveUnderline />
          </StyledNoneActiveTab>
          <StyledTab>
            My Favorite List
            <StyledUnderline />
          </StyledTab>
        </StyledTabs>
      </StyledContainer>
      <Suspense fallback={<Fallback />}>
        <FavoriteMovieList />
      </Suspense>
    </Layout>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  align-items: center;
  margin: 10px 0;
  padding: 20px 0;
`;

const StyledTabs = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  gap: 24px;
  font-size: 24px;
  font-weight: 700;
`;

const StyledTab = styled.div`
  color: var(--primary);
  display: flex;
  flex-direction: column;
`;

const StyledUnderline = styled.div`
  width: 50px;
  height: 1px;
  background-color: var(--primary);
`;

const StyledNoneActiveTab = styled.div`
  color: var(--gray-4);
  display: flex;
  flex-direction: column;
`;

const StyledNoneActiveUnderline = styled.div`
  width: 50px;
  height: 1px;
  background-color: var(--gray-4);
`;

export default Home;
