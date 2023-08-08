import React, {useState} from 'react';


const UploadButton = () => {
  const  [uploadedFile, setUploadedFile] = useState('');
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };
      return (
      <><button className="upload-button">Upload Document:</button><label>
          Choose Your Document:
          <input
            value={uploadedFile}
            type="file"
            accept=".pdf, .doc, .docx"
            onChange={handleFileUpload} />
        </label></>
    );
};

export default UploadButton;
