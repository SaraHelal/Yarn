"use client";
import React from "react";
import styled, { css } from "styled-components";
import {
  ActionButton,
  BigTitle,
  Container,
  FlexContainer,
  HeaderWrapper,
  InfoWrapper,
} from "@/app/styles/global";
function Header() {
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
