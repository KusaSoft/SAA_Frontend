import styled from '@emotion/styled';

export const NavBar = styled.div`
  background-color: #060b26;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavContainer = styled.div`
  position: fixed;
  display: flex;
  align-content: center;
  height: 100%;
  justify-content: flex-start;
  background-color: #263752;
`;
export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-width: 200px;
  overflow: auto;
  padding: 70px 50px 40px 50px;
`;
