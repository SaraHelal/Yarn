"use client";

import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { CiPause1 } from "react-icons/ci";
import styled from "styled-components";
import { ActionButton } from "../styles/global";
import { useRouter } from "next/navigation";
import recordToAPI from "@/app/api/RecordToAPI";
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
  background-color: ${(props) => (props.$back ? "#54194f" : "#f47a52")};
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
      setPauseRecording(true);
      setIsRecording(false);
    }
  };
  const stopRecording = () => {
    setRecordingCompleted(true);
    recognitionRef.current && recognitionRef?.current?.abort();
    recordingMsg && recordToAPI(recordingMsg);
  };
  const recordingAgain = () => {
    setRecordingCompleted(false);
    setIsRecording(false);
    setRecordingMsg("");
  };
  useEffect(() => {
    return () => {
      if (recognitionRef.current && recordingCompleted) {
        recognitionRef?.current?.abort();
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
          <RoundedBorder style={{ cursor: "not-allowed" }} disabled>
            <MdKeyboardVoice size="70" fill="white" />
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
      )}
    </CenteredFlexContainer>
  );
}

export default TryMe;
