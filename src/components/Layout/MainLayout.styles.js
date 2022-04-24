import styled from "@emotion/styled";

export const ContentSite = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Dashboard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 100vh;
  width: 15%;
  z-index: 11;
  min-width: 250px;
`;

export const LayoutSite = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 85%;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 0.6rem 0;
  text-align: center;
  z-index: 10;
  height: 80px;
  fontsize: 0.9rem;
  background: green;
`;
