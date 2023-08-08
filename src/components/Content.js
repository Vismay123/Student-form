import React from 'react';

const Content = ({ activeTab }) => {
  const tabContent = [
    'Participate in Competitions...',
    'Project Presentation Details...',
    'Paper Presentation Information...',
    'Online Course Details...',
    'Copyright Instructions...',
    'Internship Documentation...',
    'Certificate Information...',
  ];

  return <div className="content">{tabContent[activeTab]}</div>;
};

export default Content;
