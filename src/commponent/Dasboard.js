import React from 'react';
import './../style/Dasboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to</h1>
      <h1>GO Laundry</h1>
      <h2>Click the button below to start the program</h2>
      <button className="start-button" ><a href="/orderlist">Get's Started</a></button>
    </div>
  );
};

export default Dashboard;
