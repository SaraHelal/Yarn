"use client";
import RecordVoice from "../components/RecordVoice";
import { CenteredFlexContainer } from "../styles/global";


function TryMe() {
  return (
    <CenteredFlexContainer>
      <RecordVoice />
        <img src="./images/yarn-tile.png" />
    </CenteredFlexContainer>
  );
}

export default TryMe;
