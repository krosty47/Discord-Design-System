import React, { FC } from "react";
import styled from "styled-components";
import colors from "../../../constants/colors";

interface SectionPros {
  children: any;
}
const Section: FC<SectionPros> = ({ children, ...props }) => (
  <section {...props}>{children}</section>
);

export const LandingBrandSection = styled(Section)`
  width: 100%;
  height: 484px;
  display: flex;
  padding-bottom: 63px;
`;

export const BrandIdentitySection = styled(Section)`
  height: 1171px;
  background-color: ${colors.bg1};
`;

export const OurLogoSection = styled(Section)`
  height: 850px;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SpacingSection = styled(Section)`
  height: 800px;
  padding-top: 42px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const IsotypeSection = styled(Section)`
  height: 1300px;
  padding-top: 42px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const ExpressionsSection = styled(Section)`
  height: 1400px;
  padding-top: 42px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const ColorCombinationSection = styled(Section)`
  height: 1300px;
  padding-top: 42px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 100px;
`;
