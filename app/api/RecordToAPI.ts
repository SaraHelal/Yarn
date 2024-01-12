import axios from "axios";

const recordToAPI = (recordingMsg: string) => {
  const url = 'http://localhost:3031/records';
  const msg = {"id": Math.floor(Math.random() * Date.now()), "recordMsg": recordingMsg}
  const recordVoice = ()=>{
    axios.post(url, msg).then((res)=>{
      console.log('res: ', res);
    })
    
  }
  recordVoice();
};
export default recordToAPI;
