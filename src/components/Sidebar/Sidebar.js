import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import closeIcon from './close-icon.svg';
import appoIcon from './appointment.svg';
import teachersIcon from './teachers.svg';

export default ({ hideSideBar, logout, username }) => {
  const handleLogout = () => {
    hideSideBar();
    logout();
  };

  return (
    <div className="sidebar">
      <div className="sidebar-head">
        <h1 className="sidebar-user">{username}</h1>
        <img onClick={hideSideBar} src={closeIcon} alt="hide" />
      </div>
      <hr />
      <h2 onClick={hideSideBar}>
        <Link
          className="sidebar-link"
          to={{
            pathname: '/appointments',
          }}
        >
          <img src={appoIcon} alt="appointment" />
          <span>Appointments</span>
        </Link>
      </h2>
      <h2 onClick={hideSideBar}>
        <Link
          className="sidebar-link"
          to={{
            pathname: '/',
          }}
        >
          <img src={teachersIcon} alt="teacher" />
          <span>Search Music Teachers</span>
        </Link>
      </h2>
      <hr />
      <h2 className="sidebar-link sidebar-link-logout" onClick={handleLogout}>Logout</h2>
    </div>
  );
};
