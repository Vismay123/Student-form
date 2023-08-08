import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UploadButton from './components/UploadButton';
import Content from './components/Content';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar setActiveTab={setActiveTab} />
        <div className="content-container">
          
          <UploadButton />
          <Content activeTab={activeTab} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
