import React from "react";
import styled from "styled-components";
import {
  RowLettersButton as A,
  RowLetterTitleButton as B,
} from "../../../components/Button/Button";

const Menu = styled.div`
  flex-basis: 30%;
  width: 50%;
  font-weight: 325;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  /* border: 2px solid black; */
`;
export const SideMenu = () => {
  return (
    <Menu>
      <B>MARCA</B>
      <A>Nuestro logo</A>
      <A>Espaciado</A>
      <A>Isotipo</A>
      <A>Expresiones de isotipo</A>
      <A>Logotipo</A>
      <A>Combinaciones de color</A>
      <B>COLOR</B>
      <A>Colores de la identidad</A>
      <A>Esquema de colores</A>
      <A>Retroalimentación</A>
      <B>TIPOGRAFÍA</B>
      <A>Fuentes</A>
      <A>Guia de estilos</A>
      <A>Fuentes</A>
      <B>ICONOS Y RECURSOS</B>
      <A>Iconos</A>
      <A>Badgets</A>
      <A>Imagenes de perfil</A>
      <A>Indicadores de status</A>
      <A>Gifs Nitro</A>
      <B>LAYOUT</B>
      <A>Columnas web</A>
      <A>Aplicación de escritorio</A>
      <A>Aplicación móvil</A>
    </Menu>
  );
};
