import React, { useState } from "react";
import { fileApi } from "../API/AuctionAPIService";

const FileUploadComponent = () => {
  const [file, setFile] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const uploadFile = (event) => {
    event.preventDefault();
    setError('');
    setMsg('');

    if (!file) {
      setError('Please upload a file.');
      return;
    }

    if (file.size >= 2000000) {
      setError('File size exceeds limit of 2MB.');
      return;
    }

    let data = new FormData();
    data.append('file', file);
    data.append('name', file.name);

    // fetch('http://localhost:8080/files', {
    //   method: 'POST',
    //   body: data
    // })
    fileApi(data)
    .then(response => {
      setError('');
      setMsg('Successfully uploaded file');
    }).catch(err => {
      setError(err.message);
    });
  }

  return (
    <div className="App-intro">
      <h3>Upload a file</h3>
      <h4 style={{ color: 'red' }}>{error}</h4>
      <h4 style={{ color: 'green' }}>{msg}</h4>
      <input onChange={onFileChange} type="file"></input>
      <button onClick={uploadFile}>Upload</button>
    </div>
  )
}

export default FileUploadComponent;
