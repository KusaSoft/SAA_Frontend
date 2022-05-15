import styled from '@emotion/styled';
import {Box} from '@mui/system';
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
