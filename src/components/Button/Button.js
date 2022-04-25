import React from "react";
import { StyledButton } from "./Button.styles";

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
