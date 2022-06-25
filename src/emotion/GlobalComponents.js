import styled from '@emotion/styled';
import {Box} from '@mui/system';
import {Button, Table} from '@mui/material';
import {Link} from 'react-router-dom';
export const WrapperLayout = styled.div`
  background: ${({theme}) => theme.palette.fondo.main};
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 95vh;
`;

export const WrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
  @media (max-width: 600px) {
    padding: 0px 8px 0px 8px;
  }
`;

export const WrapperList = styled.div`
  padding: 20px;
`;

export const BoxCenterToEnd = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  color: black;
  align-items: center;
  justify-content: flex-end;
`;

export const BoxColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  height: 100%;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.palette.primary.main};

  &:hover {
    color: #5e83ba;
  }
`;

//image transpaert
export const MyPaper = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${({src}) => src});
  background-size: cover;
  position: relative;
`;

export const MyBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 2rem;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0.6rem;
  }
`;

export const MyListBox = styled(Box)`
  width: 80%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const MyTable = styled(Table)`
  overflow-x: auto;
  @media (max-width: 800px) {
  }
`;

export const MyContainerPage = styled.div`
  padding: 20px;
  @media (max-width: 1000px) {
    padding: 10px;
  }
`;
export const MyRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 20%;
  height: 450px;
  margin-top: 20px;
  background-color: white;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ListFilterContainer = styled.div`
  width: 70%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const ListFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ButtonFilter = styled(Button)`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    max-width: 180px;
  }
`;
