import styled from '@emotion/styled';

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
