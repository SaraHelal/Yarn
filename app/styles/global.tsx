import styled, { css } from "styled-components";
import { device } from "./breakPoints";

export const Container = styled.div`
  padding: 2rem 13rem;
  @media ${device.md} {
    padding: 0;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  // flex-wrap: wrap;
`;
export const HeaderContainer = styled(FlexContainer)`
  @media ${device.lg} {
    flex-direction: column-reverse;
  }
`;
export const NavWrapper = styled(FlexContainer)`
   {
  }
`;
export const CenteredFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 10% 0px 5%;
  @media ${device.md} {
    height: 80%;
    padding: 0;
  }
`;
export const HomeFlexContainer = styled.div`
  @media ${device.md} {
    justify-content: flex-start;
  }
`;
export const ActionButton = styled.a`
  background-color: #54194f;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 16px;
  margin: 0 auto;
  font-family: monospace;
  font-size: 1.4rem;
  margin: 1rem 0;
  cursor: pointer;
`;

export const InfoWrapper = styled.span`
  border: 1px solid #eeece9;
  width: 100%;
  background: #f4f0ec;
  padding: 2.2rem 3rem;
  text-align: center;
  font-size: 1.5rem;
  font-family: monospace;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  border-radius: 20px;
`;

export const RoundedBorder = styled.button`
  border: 1px solid white;
  border-radius: 50%;
  padding: 2rem;
  background: #f47a52;
  cursor: pointer;
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const MessageWrapper = styled.span`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const RecordingButton = styled(ActionButton)<{
  $again?: boolean;
  $back?: boolean;
}>`
  background-color: ${(props) => (props.$again ? "#f47a52" : "#54194f")};
  width: max-content;
  border-radius: 48px;
`;

export const RecordingHeader = styled.div`
  position: absolute;
  left: 8px;
  top: 6px;
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;
export const RecordingNowIcon = styled.span`
  width: 0.7rem;
  height: 0.7rem;
  display: block;
  background-color: red;
  border-radius: 50%;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 13rem;
  background-color: #ffd4ac;
  @media ${device.md} {
    padding: 2rem 1rem;
  }
`;
export const MenuLink = styled.a<{ $primary?: boolean }>`
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
export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
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

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Tommy Soft Regular";
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
`;
export const BigTitle = styled.span`
  font-size: 5rem;
  color: #f47a52;
  font-family: monospace;
  font-weight: bolder;
  letter-spacing: -3px;
  text-transform: capitalize;
  line-height: 93px;

  @media ${device.lg} {
    font-size: 3rem;
    line-height: 60px;
  }
`;
export const Title = styled.span`
  font-family: monospace;
  font-size: 1.3rem;
  background: #f0fbff;
  padding: 3rem 1rem;
  border: 1px solid #d8ddf0;
`;
