import styled from 'styled-components';
import Logo from '@assets/icons/logo.svg';
const Footer = () => {
  return (
    <StyledFooter>
      <StyledLine>
        <StyledLogo alt="logo" src={Logo} />
        <StyledText>© 2024 CryptoLab Inc. All Rights Reserved</StyledText>
      </StyledLine>
    </StyledFooter>
  );
};

Footer.displayName = 'Footer';

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2.4rem;
  background-color: var(--white);
  border-top: 1px solid var(--gray-5);
`;

const StyledLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const StyledLogo = styled.img`
  width: 196px;
  height: 56px;
`;

const StyledText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-4);
`;

export default Footer;
