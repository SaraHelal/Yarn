import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 13rem;
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const CenteredFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 10% 0px 5%;
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
  position:relative;
`;
export const MessageWrapper = styled.span`
  background: transparent;
  width: 29rem;
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
