import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import recordToAPI from "../api/RecordToAPI";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { CiPause1 } from "react-icons/ci";
import { FaStop } from "react-icons/fa";
import styled from "styled-components";
import { ActionButton } from "../styles/global";
import { useEffect, useState } from "react";
import Link from "next/link";
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
`;
const CenteredFlexContainer = styled(FlexContainer)`
  flex-direction: column;
  height: 86vh;
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
  border: 1px solid #e3eff3;
  width: 100%;
  background: #eff7fa;
  padding: 2.2rem 2rem;
  text-align: center;
  font-size: 1.5rem;
  font-family: monospace;
  align-items: center;
  justify-content: center;
  display: flex;
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

function toTimeString(totalSeconds:number) {
    const totalMs = totalSeconds * 1000;
    const result = new Date(totalMs).toISOString().slice(11, 19);
  
    return result;
  }
function RecordVoice() {
  const recorderControls = useAudioRecorder();
  const [recordedCompleted, setRecordedCompleted] = useState<boolean>();
  useEffect(() => {
    if (recorderControls.recordingBlob) {
      setRecordedCompleted(true);
    //   recordToAPI(recorderControls.recordingBlob);
    }
  }, [recorderControls.recordingBlob]);
  console.log('recorderControls.recordingTime: ', recorderControls.recordingTime);
  
  useEffect(() => {
    if (recorderControls.recordingTime) {
        console.log(toTimeString(recorderControls.recordingTime))
    }
  }, [recorderControls.recordingTime]);

  
  return (
    <CenteredFlexContainer>
      {!recordedCompleted && (
        <>
          {!recorderControls.isRecording ? (
            <RoundedBorder onClick={recorderControls.startRecording}>
              <MdOutlineKeyboardVoice size="70" fill="white" />
            </RoundedBorder>
          ) : (
            <>
            <span className="font-bold text-4xl absolute top-36">{toTimeString(recorderControls.recordingTime)}</span>
            <RoundedBorder onClick={recorderControls.stopRecording}>
              <FaStop size="70" fill="white" />
            </RoundedBorder>
            </>
          )}

          <RecordingInfoWrapper>
            {recorderControls.isRecording && (
              <RecordingHeader>
                <RecordingNowIcon />
                <span className="text-gray-400 text-base text-red-500">
                  Recording now ...
                </span>
              </RecordingHeader>
            )}
            {!recorderControls.isRecording ? "Tap to record" : "Tap to stop"}
          </RecordingInfoWrapper>
        </>
      )}
      {recordedCompleted && recorderControls.recordingBlob && (
        <MessageWrapper>
          <FaCircleCheck size={70} fill="green" />

          <RecordingInfoWrapper
            style={{ border: "none", background: "transparent" }}
          >
            Thanks for recording
          </RecordingInfoWrapper>
          <FlexContainer>
            <RecordingButton
              $again
              onClick={() => (
                recorderControls.startRecording, setRecordedCompleted(false)
              )}
            >
              Record again
            </RecordingButton>
            <Link href={"/"}>
              <RecordingButton $back>Return to Home</RecordingButton>
            </Link>
          </FlexContainer>
        </MessageWrapper>
      )}
    </CenteredFlexContainer>
  );
}

export default RecordVoice;
