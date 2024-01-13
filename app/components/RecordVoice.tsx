import { useAudioRecorder } from "react-audio-voice-recorder";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { FaStop } from "react-icons/fa";
import {
  FlexContainer,
  InfoWrapper,
  MessageWrapper,
  RecordingButton,
  RecordingHeader,
  RecordingNowIcon,
  RoundedBorder,
} from "../styles/global";
import { useEffect, useState } from "react";
import Link from "next/link";

//------ Converting recording's number of secs to time format -------
function toTimeString(totalSeconds: number) {
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

  return (
    <>
      {!recordedCompleted && (
        <>
          {!recorderControls.isRecording ? (
            <RoundedBorder onClick={recorderControls.startRecording}>
              <MdOutlineKeyboardVoice size="70" fill="white" />
            </RoundedBorder>
          ) : (
            <>
              <RoundedBorder onClick={recorderControls.stopRecording}>
                <span className="font-bold text-4xl absolute -top-14">
                  {toTimeString(recorderControls.recordingTime)}
                </span>
                <FaStop size="55" fill="white" />
              </RoundedBorder>
            </>
          )}

          <InfoWrapper style={{ width: "max-content", margin: "1rem" }}>
            {recorderControls.isRecording && (
              <RecordingHeader>
                <RecordingNowIcon />
                <span className="text-base text-red-500">
                  Recording now ...
                </span>
              </RecordingHeader>
            )}
            {!recorderControls.isRecording ? "Tap to record" : "Tap to stop"}
          </InfoWrapper>
        </>
      )}

      {recordedCompleted && recorderControls.recordingBlob && (
        <MessageWrapper>
          <FaCircleCheck size={70} fill="green" />

          <InfoWrapper style={{ border: "none", background: "transparent" }}>
            Thanks for recording
          </InfoWrapper>
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
    </>
  );
}

export default RecordVoice;
