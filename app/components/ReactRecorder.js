import React from 'react';
import AudioTimer from './AudioTimer';
import { ReactMic } from 'react-mic';
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { CiPause1 } from "react-icons/ci";
import { FaStop } from "react-icons/fa";
import styled from 'styled-components';
import { ActionButton } from "../styles/global";

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
const RecordingButton = styled(ActionButton)`
  background-color: "#54194f";
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
const ReactRecorder = () => {
    const [isRunning, setIsRunning] = React.useState(false);
    const [elapsedTime, setElapsedTime] = React.useState(0);
    const [voice, setVoice] = React.useState(false);
    const [recordBlobLink, setRecordBlobLink] = React.useState(null);


    const onStop = (recordedBlob) => {
        setRecordBlobLink(recordedBlob.blobURL);
        setIsRunning(false)
    };

    const startHandle = () => {
        setElapsedTime(0)
        setIsRunning(true)
        setVoice(true)
    }
    const stopHandle = () => {
        setIsRunning(false)
        setVoice(false)
    }

    const clearHandle = () => {
        setIsRunning(false)
        setVoice(false)
        setRecordBlobLink(false)
        setElapsedTime(0)
    }

    return (
        <div>
            <div className=" max-w-sm border py-4 px-6 mx-auto  ">
                <h2 className=" text-[22px] font-semibold ">Audio Recorder</h2>
                <AudioTimer isRunning={isRunning}
                    elapsedTime={elapsedTime}
                    setElapsedTime={setElapsedTime} />

                <ReactMic
                    record={voice}
                    className="sound-wave w-full "
                    onStop={onStop}
                    strokeColor="#000000"
                // backgroundColor="#FF4081"

                />
                <div className="">
                    {recordBlobLink ? <button onClick={clearHandle} className="text-[#fff] font-medium text-[16px] "> Clear </button> : ""}
                </div>
              
        {!voice ? (
          <RoundedBorder onClick={startHandle} >
            <MdOutlineKeyboardVoice size="70" fill="white" />
          </RoundedBorder>
        ) : (
          <RoundedBorder  onClick={stopHandle}>
            <FaStop size="70" fill="white" />
          </RoundedBorder>
        )}
                {/* <div className=" mt-2  ">
                    {!voice ? <button onClick={startHandle} className=" bg-[#fff] text-[#111] rounded-md py-1 px-3 font-semibold text-[16px] ">Start</button> : <button onClick={stopHandle} className=" bg-[#fff] text-[#111] rounded-md py-1 px-3 font-semibold text-[16px] ">Stop</button>}
                </div>
                <div className="">
                    {recordBlobLink ? <audio controls src={recordBlobLink} className="mt-6" /> : ""}

                </div> */}
            </div>
        </div>
    );
};

export default ReactRecorder;