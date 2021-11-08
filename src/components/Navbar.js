import React from "react";
import { useState } from "react";
import styled from "styled-components/macro";
import Profile from "../images/profile.png";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 14px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled(Link)`
  padding: 0 8px;
  text-decoration: none;
  color: #000;

  svg {
    height: 24px;
    width: 24px;
  }
`;

const LeftLinks = styled.div`
  padding: 10px;
  margin-left: 10px;
`;

const RightLinks = styled.div`
  padding: 10px;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;

const MenuLabel = styled.label`
  background-color: white;
  position: fixed;
  top: 0.2rem;
  right: 1rem;
  height: 4rem;
  width: 4rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 1.5rem;
  height: 2px;
  display: inline-block;
  margin-top: 2rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 1.5rem;
    height: 1px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navbar = ({ click }) => {
  const [menuClick, setMenuClick] = useState(false);
  const handleClick = () => setMenuClick(!menuClick);

  const hamburgerClick = () => {
    click();
    handleClick();
  }

  return (
    <>
      <Nav>
        <LeftLinks>
          <NavLinks to="/about">About</NavLinks>
          <NavLinks to="/store">Store</NavLinks>
        </LeftLinks>
        <RightLinks>
          <NavLinks to="/gmail">Gmail</NavLinks>
          <NavLinks to="/images">Images</NavLinks>
          <NavLinks
            to="/"
            css={`
              padding-right: 20px;
            `}
          >
            <svg focusable="false" viewBox="0 0 24 24">
              <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
            </svg>
          </NavLinks>
          <Link to="/">
            <img src={Profile} alt="profile" />
          </Link>
        </RightLinks>
      </Nav>
      <MenuLabel htmlFor="navi-toggle" onClick={hamburgerClick}>
        <Icon clicked={menuClick}>&nbsp;</Icon>
      </MenuLabel>
    </>
  );
};

export default Navbar;
