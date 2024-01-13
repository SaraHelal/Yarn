import axios from "axios";

const recordToAPI = (audioBlobs: Blob) => {
  const url = "";
  const formData = new FormData();
  formData.append("audioFile", audioBlobs, "audioFileName.mp3");

  // Make a POST request using Axios
  axios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log("Upload successful:", response.data);
    })
    .catch((error) => {
      console.error("Error uploading audio:", error);
    });
};
export default recordToAPI;
