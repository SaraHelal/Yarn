"use client";
import React from "react";
import {
  ActionButton,
  BigTitle,
  Container,
  HeaderContainer,
  HeaderWrapper,
  InfoWrapper,
} from "@/app/styles/global";
function Header() {
  return (
    <Container>
      <HeaderContainer>
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
      </HeaderContainer>
    </Container>
  );
}

export default Header;
