"use client";
import React from "react";
import styled, { css } from "styled-components";
import { ActionButton, Container } from "@/app/styledComponents/global";
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
    gap:2rem;
  `;
  const InfoHeader = styled.div`
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
  `;
  const Title = styled.span`
  font-family: monospace;
  font-size: 1.3rem;
  `;
  return (
    <Container>
      <FlexContainer>
        <InfoHeader>
          <BigTitle>Let's Enjoy together</BigTitle>
          <Title>
            Say goodbye to passive screentime. Embrace AI-powered, interactive
            stories that amplify your child’s unique imagination.
          </Title>
          <ActionButton>
            Try me
          </ActionButton>
        </InfoHeader>

        <img src="./images/tablet.png" alt="frog" width="600" height="200" />
      </FlexContainer>
    </Container>
  );
}

export default Header;
