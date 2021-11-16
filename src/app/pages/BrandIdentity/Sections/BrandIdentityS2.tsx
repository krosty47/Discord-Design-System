import React from "react";
import styled from "styled-components";
import colors from "../../../../constants/colors";
import {
  BrandIdentitySection,
  OurLogoSection,
  SpacingSection,
  IsotypeSection,
  ExpressionsSection,
} from "../../../components/Section/Section";
import { CreateAvatarButton } from "../../../components/Button/Button";
import { TextBox } from "../../../components/TextBox/TextBox";
import DiscordLogo1 from "../../../assets/DiscordLogo1.png";
import Vector from "../../../assets/Vector.png";
import DiscordSpacing from "../../../assets/DiscordSpacing.png";
import EjemplosIsotipos from "../../../assets/EjemplosIsotipos.png";
import ExpressionIcons from "../../../assets/ExpressionIcons.png";
import exp1 from "../../../assets/ExpressionIcons/exp1.png";
import exp2 from "../../../assets/ExpressionIcons/exp2.png";
import exp3 from "../../../assets/ExpressionIcons/exp3.png";
import exp4 from "../../../assets/ExpressionIcons/exp4.png";
import exp5 from "../../../assets/ExpressionIcons/exp5.png";
import exp6 from "../../../assets/ExpressionIcons/exp6.png";
import { SideMenu } from "../Menu/SideMenu";
const Container = styled.div`
  height: 1083px;
  padding-top: 109px;
  padding-bottom: 109px;
  margin-left: 3rem;
  margin-right: 3rem;
  display: flex;
  justify-content: center;
`;

const ContainerChild = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RightSide = styled.div`
  width: 50%;
  flex-basis: 70%;
  border-radius: 30px;
  /* border: 2px solid black; */
  background-color: ${colors.white};
  overflow: auto;
  width: 794px;
  height: 953px;
`;

const SeparateLine = styled.hr`
  border-top: 3px solid #5865f2;
  width: 700px;
`;

const ManageIcons = styled.div``;
const ImgIcons = styled.img`
  padding-left: 26px;
`;

export const BrandIdentityS2 = () => {
  return (
    <>
      <BrandIdentitySection>
        <Container>
          <ContainerChild>
            <SideMenu />
            <RightSide>
              <OurLogoSection>
                <TextBox style={{ fontSize: "30px" }}>NUESTRO LOGO</TextBox>
                <TextBox>
                  <div style={{ fontWeight: "bold" }}>
                    1. El logo de Discord.
                  </div>
                  El logo de Discord consiste en dos elementos: un ícono (Clyde)
                  y el nombre de la marca, y debería presentarse siempre en su
                  conjunto. Por otro lado, de ninguna forma debería modificarse,
                  distorcionarse o rediseñarse a gusto.
                </TextBox>
                <TextBox>
                  <div style={{ fontWeight: "bold" }}>2. Versión pequeña.</div>
                  Para tamaños pequeños, optimizamos el interletraje para
                  aumentar la legibilidad. Esta versión debería utilizarse para
                  tamaños menores a 80px x 15px (60pt x 11.25pt).
                </TextBox>
                <img
                  style={{
                    width: "100%",
                    paddingBottom: "80px",
                  }}
                  src={DiscordLogo1}
                  alt="Image here."
                ></img>
              </OurLogoSection>
              <SpacingSection>
                <SeparateLine />
                <TextBox style={{ fontSize: "30px" }}>ESPACIADO</TextBox>
                <TextBox>
                  Para asegurar un interletrado correcto en el logo, debe
                  aplicarse el siguiente proceso:
                </TextBox>
                <div style={{ fontWeight: "bold" }}>Paso 1</div>
                <TextBox>
                  Vectorizar la letra “o” de la tipografía Ginto Nord Black.
                </TextBox>
                <div style={{ fontWeight: "bold" }}>Paso 2</div>
                <TextBox>Rotar la letra 90 grados.</TextBox>
                <div style={{ fontWeight: "bold" }}>Paso 3</div>
                <TextBox>Duplicarla.</TextBox>
                <TextBox>
                  x =
                  <img src={Vector} alt="Vector." />
                  <img src={Vector} alt="Vector." />
                </TextBox>
                <img
                  style={{ width: "100%" }}
                  src={DiscordSpacing}
                  alt="Spacing image"
                />
              </SpacingSection>
              <IsotypeSection>
                <SeparateLine />
                <TextBox style={{ fontSize: "30px" }}>ISOTIPO</TextBox>
                <TextBox>
                  Utilizamos el ícono “Clyde” como un elemento de marca
                  independiente y como parte del logo. Al hacer esto, se crea un
                  fuerte y distintivo símbolo de marca.
                </TextBox>
                <TextBox>
                  Clyde debe ser usado como una forma reducida del logo en
                  espacios pequeños. El color principal de la marca (burple)
                  debería ser siempre la primera opción de fondo. Para otras
                  situaciones, versiones monocromáticas también son permiidas.
                </TextBox>
                <TextBox>
                  Vectorizar la letra “o” de la tipografía Ginto Nord Black.
                </TextBox>
                <div style={{ fontWeight: "bold" }}>Jerarquía de uso:</div>
                <div style={{ fontWeight: "bold" }}>
                  1. Clyde blanco sobre fondo burple.
                </div>
                <TextBox>Opción preferida.</TextBox>
                <div style={{ fontWeight: "bold" }}>
                  2. Clyde burple sobre fondo blanco.
                </div>
                <TextBox>
                  Utilizarla cuando la primera opción no funciona.
                </TextBox>
                <div style={{ fontWeight: "bold" }}>
                  3. Clyde blanco sobre fondo negro.
                </div>
                <TextBox>
                  Siempre que el color burple no pueda ser utilizado, esta seria
                  la opción preferida.
                </TextBox>
                <div style={{ fontWeight: "bold" }}>
                  4. Clyde negro sobre fondo blanco.
                </div>
                <TextBox>
                  Utilizarla cuando la versión blanca de Clyde no funciona.
                </TextBox>
                <img
                  style={{ width: "100%" }}
                  src={EjemplosIsotipos}
                  alt="Ejemplos isotipos"
                />
              </IsotypeSection>
              <ExpressionsSection>
                <SeparateLine />
                <TextBox style={{ fontSize: "30px" }}>EXPRESIONES</TextBox>
                <TextBox>
                  Nuestro ícono cobra vida como personaje real gracias una
                  variedad de expresiones faciales.
                </TextBox>
                <TextBox>
                  Clyde es capaz de expresar una gran variedad de sentimientos
                  con tan solo cambiar la forma de sus ojos. ¿Qué está pensando
                  Clyde? Quizás nunca lo sabremos.Utilizarla cuando la versión
                  blanca de Clyde no funciona.
                </TextBox>
                <img src={ExpressionIcons} alt="Expression Icons." />
                <div style={{ fontWeight: "bold" }}>Discord Avatar Maker</div>
                <TextBox>
                  Si eres de los que prefieren no poner fotos personales en tu
                  perfil de Discord, ¡ahora puedes crear tu propia versión de
                  Clyde para usarla como avatar!
                </TextBox>
                <a href="https://discord-avatar-maker.app/" target="_blank">
                  <CreateAvatarButton>Crea tu avatar</CreateAvatarButton>
                </a>
                <ManageIcons>
                  <ImgIcons src={exp1} alt="exp" />
                  <ImgIcons src={exp2} alt="exp" />
                  <ImgIcons src={exp3} alt="exp" />
                  <ImgIcons src={exp4} alt="exp" />
                  <ImgIcons src={exp5} alt="exp" />
                  <ImgIcons src={exp6} alt="exp" />
                </ManageIcons>
              </ExpressionsSection>
            </RightSide>
          </ContainerChild>
        </Container>
      </BrandIdentitySection>
    </>
  );
};
