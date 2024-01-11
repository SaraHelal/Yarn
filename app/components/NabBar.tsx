"use client";
import Image from "next/image";
import React from "react";
import styled, { css } from "styled-components";
import { Container } from "../styledComponents/global";

function NabBar() {
  const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 13rem;
    background-color: #ffd4ac;
  `;
  const MenuButton = styled.button<{ $primary?: boolean }>`
    font-weight: bold;
    font-size: 1.2rem;
    color: #54194f;
    text-decoration: normal;
    ${(props) =>
      props.$primary &&
      css`
        color: #f47a52;
        text-decoration: underline;
      `}
  `;
   const MenuContainer =styled.div`
        display:flex;
        justify-content:space-between;
   `
  return (
    <NavMenu>
        <img src="./images/logo.png" alt="logo" width={120} height={120} />
        <div className="flex justify-end gap-8">
          <MenuButton $primary>Home</MenuButton>
          <MenuButton>Try</MenuButton>
        </div>
    </NavMenu>
  );
}

export default NabBar;
