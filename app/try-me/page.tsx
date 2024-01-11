"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";

import { CiPause1 } from "react-icons/ci";
import styled from "styled-components";
import { ActionButton } from "../styledComponents/global";
import { useRouter } from "next/navigation";
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
  min-height: 100vh;
`;
const RoundedBorder = styled.button`
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
  display: flex;
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
  display: block;
  background: white;
  padding: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
  font-family: monospace;
`;
const RecordingButton = styled(ActionButton)<{
  $again?: boolean;
  $back?: boolean;
}>`
  background-color: ${(props) => (props.$back ? "#54194f" : "#f47a52")};
  width: max-content;
  border-radius: 48px;
`;
function TryMe() {
  const [recordingMsg, setRecordingMsg] = useState<string>("");
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [pauseRecording, setPauseRecording] = useState<boolean>(false);
  const [recordingCompleted, setRecordingCompleted] = useState<boolean>(false);
  const recognitionRef = useRef<any>(null);
  const router = useRouter();
  const handleRecording = () => {
    if (!isRecording) {
      console.log("isRecording, ", isRecording);
      setIsRecording(true);
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      // saving speech recognition results
      recognitionRef.current.onresult = (event: any) => {
        const { transcript } = event.results[event.results.length - 1][0];
        setRecordingMsg(transcript);
        console.log("transcript: ", transcript);
      };
      recognitionRef.current.start();
    } else {
      console.log("stop recording, ");
      setPauseRecording(true);
      setIsRecording(false);
      // if (recognitionRef.current) {
      //   recognitionRef?.current?.stop();
      // }
    }
  };
  const stopRecording = () => {
    setRecordingCompleted(true);
  };
  const recordingAgain = () => {
    setRecordingCompleted(false);
    setIsRecording(false);
    setRecordingMsg("");
  };
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef?.current?.stop();
      }
    };
  }, [isRecording]);
  return (
    <CenteredFlexContainer>
      {!recordingCompleted &&
        (!isRecording ? (
          <RoundedBorder onClick={handleRecording}>
            <MdOutlineKeyboardVoice size="70" fill="white" />
          </RoundedBorder>
        ) : (
          <RoundedBorder style={{ cursor: "default" }} disabled>
            <MdKeyboardVoice size="70" fill="white" />
          </RoundedBorder>
        ))}

      {!recordingCompleted && (isRecording || recordingMsg) && (
        <MessageWrapper>
          <RecordingInfoWrapper2>{recordingMsg}</RecordingInfoWrapper2>
          <RecordingButton onClick={stopRecording}>
            Stop Recording
          </RecordingButton>
        </MessageWrapper>
      )}

      {recordingCompleted && (
        <MessageWrapper>
          <RecordingInfoWrapper2
            style={{ border: "none", background: "transparent" }}
          >
            Thanks for recording
          </RecordingInfoWrapper2>
          <FlexContainer>
            <RecordingButton $again onClick={recordingAgain}>
              Record again
            </RecordingButton>
            <RecordingButton $back onClick={() => router.push('/', { scroll: false })
}>
              Return to Home
            </RecordingButton>
          </FlexContainer>
        </MessageWrapper>
      )}
    </CenteredFlexContainer>
  );
}

export default TryMe;
