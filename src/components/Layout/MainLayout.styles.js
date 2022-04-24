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
  background-color: #dfe1e6;
  height: 100vh;
  width: ${(props) => (props.open ? "300px" : "0px")};
  min-width: ${(props) => (props.open ? "300px" : "0px")};
  z-index: 11;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export const LayoutSite = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  // width: ${(props) => (props.open ? "85%" : "100%")};
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  padding: 0.6rem 0;
  text-align: center;
  z-index: 10;
  height: 40px;
  max-height: 40px;
  fontsize: 0.9rem;
  background: #dfe1e6;
  justify-content: space-between;
`;
