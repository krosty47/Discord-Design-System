import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../../constants/colors";
import routes from "../../../constants/routes";
import  DiscordLogo from '../../assets/DiscordLogo.png'


const Menu = styled.header`
  display: flex;
  margin-left: 40px;
  margin-right: 40px;
  .logo-container {
    img {
      margin-top: 26px;

    }
    align-items: center;
    display: flex;
  }
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: space-around;
  left: 5%;
  position: relative;
  width: 30%;
`;

export const NavBar = () => {
  return (
    <Menu>
      <Link to={"/"}>
        <div className="logo-container">
          <img src={DiscordLogo} alt="Discord Logo" />
        </div>
      </Link>
      <MenuBar></MenuBar>
    </Menu>
  );
};

export const MainHeader = styled(NavBar)`
  align-items: center;
  background-color: ${colors.white};
  color: ${colors.black};
  display: flex;
  justify-content: space-between;
`;
