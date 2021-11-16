import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { GenericTextBoxProps } from "./types";

interface GenericInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: any;
  style?: any;
}

const GenericTextBox: FC<GenericInputProps> = ({ className, children, style, ...props }) => (
  <div {...props} className={className}>
    {children}
  </div>
);

const TextBox = styled(GenericTextBox)`
  border-radius: 5px;
  box-sizing: border-box;
  flex-basis: 60%;
  font-size: 1rem;
  margin: 20px 10px;
  min-width: 200px;
  outline: none;
  padding: 1em;
  position: relative;
`;

export { TextBox };
