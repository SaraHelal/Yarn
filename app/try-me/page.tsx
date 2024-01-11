"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";

import { CiPause1 } from "react-icons/ci";
import styled from "styled-components";
import { ActionButton } from "../styledComponents/global";
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}
const CenteredFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
const RoundedBorder = styled.span`
  border: 1px solid black;
  border-radius: 50%;
  padding: 2rem;
  background: #54194f;
  cursor: pointer;
`;
const MessageWrapper = styled.span`
  padding: 2rem;
  background: transparent;
  width: 29rem;
  /* height: 9rem; */
  display: flex;
  position: absolute;
  top: 58%;
  right: 35%;
  /* bottom: 0; */
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RecordingInfoWrapper = styled.span`
  border: 1px solid black;
  padding: 2rem;
  background: #ffffff;
  width: 22rem;
  height: 9rem;
  display: flex;
  position: absolute;
  top: 20%;
  right: 38%;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;
const RecordingInfoWrapper2 = styled.span`
  border: 1px solid #d1caca;
  width: 100%;
  height: 5rem;
  display: block;
  background: white;
  padding: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
  font-family: monospace;
`;
const StopRecordingButton = styled(ActionButton)`
  background-color: #f47a52;
  width: max-content;
  border-radius: 48px;
`;
function TryMe() {
  const [recordingMsg, setRecordingMsg] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [pauseRecording, setPauseRecording] = useState<boolean>(false);
  const [recordingCompleted, setRecordingCompleted] = useState<boolean>(false);
  const recognitionRef = useRef<any>(null);

  const handleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);

      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      // Event handler for speech recognition results
      recognitionRef.current.onresult = (event: any) => {
        const { transcript } = event.results[event.results.length - 1][0];
        setRecordingMsg(transcript);
      };
      recognitionRef.current.start();
    } else {

      setIsRecording(false);
      // setPauseRecording(true);
    }
  };

  useEffect(()=>{
    if(recognitionRef.current && !isRecording){
      recognitionRef.current.stop();
    }
    return ()=>{
      recognitionRef?.current?.stop();
    }
  },[isRecording])
  return (
    <CenteredFlexContainer>
      <RoundedBorder onClick={handleRecording}>
        {isRecording && (
          <MessageWrapper>
            <RecordingInfoWrapper2>{recordingMsg}</RecordingInfoWrapper2>
            <StopRecordingButton>Stop Recording</StopRecordingButton>
          </MessageWrapper>
        )}
        {!isRecording ? (
          <MdOutlineKeyboardVoice size="70" fill="white" />
        ) : (
          <CiPause1 size="70" fill= "white"/>
          // <MdKeyboardVoice size="70" fill="white" />
        )}
      </RoundedBorder>
    </CenteredFlexContainer>
  );
}

export default TryMe;
