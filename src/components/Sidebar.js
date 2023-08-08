import React from 'react';

const Sidebar = ({ setActiveTab }) => {
  const tabs = [
    'Participate / Organize Competitions',
    'Project Presentation',
    'Paper Presentation',
    'Online Course',
    'Copyright',
    'Internship',
    'Certificate',
  ];

  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        {tabs.map((tab, index) => (
          <li key={index}>
            <button onClick={() => setActiveTab(index)}>{tab}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
