import { FC } from "react";
import styled from "styled-components";
import colors from "../../../constants/colors";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

const BaseButton = styled(Button)`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  min-width: 140px;
  outline: none;
  padding: 1.1em 2em;
  width: 100%;
  :disabled {
    opacity: 0.5;
  }
`;
BaseButton.defaultProps = {
  type: "button",
};

export const NavBarButtons = styled(Button)`
  background-color: Transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: 0.15px;
  line-height: 24px;
  text-align: right;
`;
