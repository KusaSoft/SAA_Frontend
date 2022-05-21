import React from "react";
import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
    transform: translateY(-0.2rem);
    background: ${(props) => props.hoverBackground};
    color: ${(props) => props.hoverColor};
  }
`;
