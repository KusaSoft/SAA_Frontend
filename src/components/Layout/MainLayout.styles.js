import styled from '@emotion/styled';

export const ContentSite = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
`;

export const Dashboard = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: ${(props) => (props.open ? '300px' : '0px')};
  min-width: ${(props) => (props.open ? '300px' : '0px')};
  z-index: 10;
  background: ${({theme}) => theme.palette.navBar.main};
  @media (max-width: 1000px) {
    position: absolute;
  }
`;

export const LayoutSite = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 0.6rem 0rem;
  text-align: center;
  z-index: 10;
  height: 40px;
  max-height: 40px;
  fontsize: 0.9rem;
  background: ${({theme}) => theme.palette.header.main};
  justify-content: space-between;
  @media (max-width: 1000px) {
    z-index: 11;
  }
`;
