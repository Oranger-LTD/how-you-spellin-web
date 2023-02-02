import React from "react";

import "./style.css";

export const Menu: React.FC = () => (
  <div className="page-menu">
    <ul>
      <li>
        <a href={`/`}>Home</a>
      </li>
      <li>
        <a href={`/about`}>About</a>
      </li>
      <li>
        <a href={`/about/privacy-policy`}>Privacy Policy</a>
      </li>
    </ul>
  </div>
);
