import React from "react";
import styled from "styled-components";
import { BrandLanding } from "../../pages/BrandIdentity/Landing/BrandLanding";
import { BrandIdentityS2 } from "./Sections/BrandIdentityS2";

export const BrandIdentity = () => {
  console.log(`llega aca?`);
  return (
    <>
      <BrandLanding />
      <BrandIdentityS2 />
    </>
  );
};
