import { FC } from "react";
import styled from "styled-components";
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
  min-width: 4rem;
  outline: none;
  padding: 1em 2em;
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
  font-family: Whitney;
  white-space: nowrap;
  font-size: 2vmin;
  margin-top: 1rem;
  font-style: normal;
  font-weight: 600;
`;

export const RowLetterTitleButton = styled(Button)`
  background-color: Transparent;
  border: none;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: left;
  font-size: 22px;
`;

export const RowLettersButton = styled(Button)`
  background-color: Transparent;
  margin-bottom: 5px;
  text-align: left;
  margin-top: 5px;
  border: none;
  font-size: 18px;
`;

export const CreateAvatarButton = styled(BaseButton)`
  background-color: #f2f2f4;
  border-radius: 3rem;
  margin-bottom: 15px;
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #5865f2;

  text-decoration: underline;
`;
