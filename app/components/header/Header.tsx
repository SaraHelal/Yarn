"use client";
import React from "react";
import styled, { css } from "styled-components";
import { ActionButton, Container, InfoWrapper } from "@/app/styles/global";
function Header() {
  const Button = styled.button<{ $primary?: boolean }>`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #f47a52;
    color: #f47a52;
    margin: 0.5em 1em;
    padding: 0.25em 1em;

    ${(props) =>
      props.$primary &&
      css`
        background: #f47a52;
        color: white;
      `}
  `;

  const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  `;
  const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Tommy Soft Regular";
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
  `;
  const BigTitle = styled.span`
    font-size: 5rem;
    color: #f47a52;
    font-family: monospace;
    font-weight: bolder;
    letter-spacing: -3px;
    text-transform: capitalize;
    line-height: 93px;
  `;
  const Title = styled.span`
    font-family: monospace;
    font-size: 1.3rem;
    background: #f0fbff;
    padding: 3rem 1rem;
    border: 1px solid #d8ddf0;
  `;
  return (
    <Container>
      <FlexContainer>
        <HeaderWrapper>
          <BigTitle>Let's Enjoy together</BigTitle>
          <InfoWrapper>
            Engage your children with open-ended, illustrated audio stories
            tailored to their interests and ideas. Take yarn for a spin and give
            your kids control of the story.
          </InfoWrapper>
          <ActionButton href={"/try-me"}>Try me</ActionButton>
        </HeaderWrapper>

        <img src="./images/tablet.png" alt="frog" width="600" height="200" />
      </FlexContainer>
    </Container>
  );
}

export default Header;
