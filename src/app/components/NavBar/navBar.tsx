import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import colors from "../../../constants/colors";
import routes from "../../../constants/routes";
import DiscordLogo from "../../assets/DiscordLogo.png";
import { NavBarButtons } from "../Button/Button";

const Menu = styled.header`
  display: flex;
  box-sizing: border-box;
  margin-left: 3rem;
  margin-right: 3rem;
  .logo-container {
    img {
      width: 65%;
      height: 65%;
      margin-top: 1.5rem;
    }
    align-items: center;
    display: flex;
  }
`;

const MenuBar = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-around;
`;
const Container = styled.div`
  width: 100%;
  flex-basis: 50%;
`;

export const NavBar = () => {
  return (
    <>
      <Menu>
        <Container>
          <Link to={"/"}>
            <div className="logo-container">
              <img
                style={{ "minWidth": "130px" }}
                src={DiscordLogo}
                alt="Discord Logo"
              />
            </div>
          </Link>
        </Container>
        <MenuBar>
          <NavBarButtons>Vista general</NavBarButtons>
          <Link to="brandidentity">
            <NavBarButtons>Identidad de marca</NavBarButtons>
          </Link>
          <NavBarButtons>Componente</NavBarButtons>
          <NavBarButtons>Guías de estilo</NavBarButtons>
          <NavBarButtons>Motion</NavBarButtons>
        </MenuBar>
      </Menu>
      <Outlet />
    </>
  );
};

export const MainHeader = styled(NavBar)`
  background-color: ${colors.white};
  color: ${colors.black};
  display: flex;
  box-sizing: border-box;
  /* justify-content: space-between; */
`;
