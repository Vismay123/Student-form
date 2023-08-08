import React, { useState } from 'react';
import './App.css';
import './Header.css';


function App() {
  const [studentName, setStudentName] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [uploadedFile, setUploadedFile] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };
  

  return (
    <>
    <div className="App">
      <header>
        <img src="cllg-logo.png" alt="logo" className='logo'/>
        <img src="cllg-title.png" alt="logo" className='name'/>
      </header>
      <h1>Student Details</h1>
      <label>
        Student Name:
        <input
          type="text"
          placeholder='enter your name'
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Registration Number:
        <input
          type="text"
          placeholder='enter your registration number'
          value={regNumber}
          onChange={(e) => setRegNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        Select Your Division:
        <select
          value={selectedDivision}
          onChange={(e) => setSelectedDivision(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="option1">TE 5</option>
          <option value="option2">TE 6</option>
        </select>
      </label>
      <br />
      <label>
        Select Your Target:
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="option1">Participate / Organize Competitions (Technical/Non-technical)</option>
          <option value="option2">Project Presentation</option>
          <option value="option3">paper Presentation</option>
          <option value="option4">Online Course</option>
          <option value="option5">CopyRight</option>
          <option value="option6">Internship</option>
          <option value="option7">Certification</option>
        </select>
      </label>
      <br />
      <label>
        Upload Your Document:
        <input
        value={uploadedFile}
          type="file"
          accept=".pdf, .doc, .docx"
          onChange={handleFileUpload}
        />
      </label>
      <button type="Submit">Submit</button>
    </div>
    </>
  );
}

export default App;
