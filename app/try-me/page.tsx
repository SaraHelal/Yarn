"use client";

import React, { useEffect, useRef, useState } from "react";
// import { MdOutlineKeyboardVoice } from "react-icons/md";
// import { MdKeyboardVoice } from "react-icons/md";
// import { FaCircleCheck } from "react-icons/fa6";
// import { CiPause1 } from "react-icons/ci";
// import { FaStop } from "react-icons/fa";
import styled from "styled-components";
import { ActionButton } from "../styles/global";
// import { useRouter } from "next/navigation";
// import recordToAPI from "@/app/api/RecordToAPI";
import ReactRecorder from '../components/ReactRecorder'
import RecordVoice from "../components/RecordVoice";
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const CenteredFlexContainer = styled(FlexContainer)`
  flex-direction: column;
  height: 87vh;
`;
const RoundedBorder = styled.button`
  border: 1px solid black;
  border-radius: 50%;
  padding: 2rem;
  background: #54194f;
  cursor: pointer;
`;
const MessageWrapper = styled.span`
  background: transparent;
  width: 29rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RecordingInfoWrapper = styled.span`
  border: 1px solid #d1caca;
  width: 100%;
  background: white;
  padding: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
  font-family: monospace;
  align-items: center;
  justify-content: center;
  display: flex;
  min-height: 7rem;
  position: relative;
`;
const RecordingButton = styled(ActionButton)<{
  $again?: boolean;
  $back?: boolean;
}>`
  background-color: ${(props) => (props.$back ? "#f47a52" : "#54194f")};
  width: max-content;
  border-radius: 48px;
`;

const RecordingHeader = styled.div`
  position: absolute;
  left: 8px;
  top: 7px;
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;
const RecordingNowIcon = styled.span`
  width: 0.7rem;
  height: 0.7rem;
  display: block;
  background-color: red;
  border-radius: 50%;
`;

function TryMe() {
  // const [recordingMsg, setRecordingMsg] = useState<string>("");
  // const [isRecording, setIsRecording] = useState<boolean>(false);
  // const [pauseRecording, setPauseRecording] = useState<boolean>(false);
  // const [recordingCompleted, setRecordingCompleted] = useState<boolean>(false);
  // const recognitionRef = useRef<any>(null);
  // const router = useRouter();
  // const handleRecording = () => {
  //   if (!isRecording) {
  //     setIsRecording(true);
  //   } else {
  //     setIsRecording(false);
  //   }
  // };
  // const stopRecording = () => {
  //   setRecordingCompleted(true);
  // };
  // const recordingAgain = () => {
  //   setRecordingCompleted(false);
  //   setIsRecording(false);
  //   setRecordingMsg("");
  // };
  // useEffect(() => {}, [isRecording]);
  return (
    <CenteredFlexContainer>
      {/* <h1>Voice Recorder</h1> */}
      <RecordVoice />
      {/* <Recorder /> */}
        {/* <ReactRecorder /> */}
      {/* {!recordingCompleted &&
        (!isRecording ? (
          <RoundedBorder onClick={handleRecording}>
            <MdOutlineKeyboardVoice size="70" fill="white" />
          </RoundedBorder>
        ) : (
          <RoundedBorder>
            <FaStop size="70" fill="white" onClick={stopRecording}/>
          </RoundedBorder>
        ))}

      {!recordingCompleted && (isRecording || recordingMsg) && (
        <MessageWrapper>
          <RecordingInfoWrapper>
            <RecordingHeader>
              <RecordingNowIcon />
              <span className="text-gray-400 text-base">Recording now ...</span>
            </RecordingHeader>

            {recordingMsg}
          </RecordingInfoWrapper>
          <RecordingButton onClick={stopRecording}>
            Stop Recording
          </RecordingButton>
        </MessageWrapper>
      )}

      {recordingCompleted && (
        <MessageWrapper>
          <FaCircleCheck size={70} fill="green" />

          <RecordingInfoWrapper
            style={{ border: "none", background: "transparent" }}
          >
            Thanks for recording
          </RecordingInfoWrapper>
          <FlexContainer>
            <RecordingButton $again onClick={recordingAgain}>
              Record again
            </RecordingButton>
            <RecordingButton
              $back
              onClick={() => router.push("/", { scroll: false })}
            >
              Return to Home
            </RecordingButton>
          </FlexContainer>
        </MessageWrapper>
      )} */}
    </CenteredFlexContainer>
  );
}

export default TryMe;
