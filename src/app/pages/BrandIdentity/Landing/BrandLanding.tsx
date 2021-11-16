import React from "react";
import { LandingBrandSection } from "../../../components/Section/Section";
import styled from "styled-components";
import DiscordGif from "../../../assets/DiscordGif.gif";

const Container = styled.div`
  height: 266px;
  padding-top: 109px;
  padding-bottom: 109px;
  margin-left: 3rem;
  margin-right: 3rem;
  display: flex;
  justify-content: center;
`;

const ContainerChild = styled.div`
  flex-basis: 50%;
`;

const LeftSide = styled.div`
  width: 70%;
  font-weight: 325;
  font-size: 20px;
`;

const RightSide = styled.div`
  width: 100%;
  display: flex;
  flex-basis: 50%;
`;

export const BrandLanding = () => {
  return (
    <>
      <LandingBrandSection>
        <Container>
          <ContainerChild>
            <div
              style={{
                fontSize: "56px",
                paddingBottom: "1.5rem",
                width: "50%",
              }}
            >
              IDENTIDAD DE MARCA
            </div>
            <LeftSide>
              Somos una aplicación divertida y entretenida que no se toma las
              cosas muy en serio. Dicho esto, nos gusta mantener un buen nivel
              de calidad. Si tienes pensado usar nuestros diseños, intenta que
              sea con buen gusto y mandándonos el resultado para que le demos el
              visto bueno.
            </LeftSide>
          </ContainerChild>
          <RightSide>
            <img
              style={{ width: "40%", height: "40%" }}
              src={DiscordGif}
              alt="discord Gif"
            ></img>
          </RightSide>
        </Container>
      </LandingBrandSection>
    </>
  );
};
