"use client";
import React from "react";
import styled, { css } from "styled-components";
import { usePathname } from "next/navigation";
import { FlexContainer } from "../styles/global";

function NavBar() {
  const pathname = usePathname()
  const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 13rem;
    background-color: #ffd4ac;
  `;
  const MenuLink = styled.a<{ $primary?: boolean }>`
    font-weight: bold;
    font-size: 1.2rem;
    color: #54194f;
    text-decoration: normal;
    ${(props) =>
      props.$primary &&
      css`
        color: #f47a52;
        text-decoration: underline;
        pointer-events: none;
        cursor: default;
      `}
  `;
  const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  return (
    <NavMenu>
      <img src="./images/logo.png" alt="logo" width={120} height={120} />
      <FlexContainer style={{gap: '2rem'}}>
        <MenuLink href={"/"} $primary = {pathname ==="/" ? true : false} >
          Home
        </MenuLink>
        <MenuLink href={"/try-me"} $primary = {pathname ==="/try-me" ? true : false}>Try</MenuLink>
      </FlexContainer>
    </NavMenu>
  );
}

export default NavBar;
