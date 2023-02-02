import React from "react";

import "./style.css";

export const MadeBy: React.FC = () => (
  <div className="page-made-by">
    Made with{" "}
    <span className="heart-ascii" title="love">
      &#9829;
    </span>{" "}
    by{" "}
    <a
      title="Kostas"
      target="_blank"
      rel="noreferrer"
      href="https://kostas.rocks"
    >
      Kostas
    </a>
  </div>
);
