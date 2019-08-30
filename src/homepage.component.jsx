import React from "react";

import './homepage.styles.scss';

//Functional Component
const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">RESIDENTIAL CLEANING</h1>
          <span className="subtitle">BOOK BOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">COMMERCIAL CLEANING</h1>
          <span className="subtitle">BOOK BOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MOVE IN/MOVE OUT CLEANING</h1>
          <span className="subtitle">BOOK BOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">CARPET CLEANING</h1>
          <span className="subtitle">BOOK BOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage; 