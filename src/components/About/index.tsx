import React from "react";
import { MadeBy } from "../MadeBy";
import { Menu } from "../Menu";
import { AppStore } from "../StoreButton";

import "./style.css";

export const About: React.FC = () => (
  <div className="page-wrapper">
    <Menu />
    <h1>About</h1>
    <p>
      Read the app's <a href={`/about/privacy-policy`}>privacy policy</a>.
    </p>
    <p>
      Check the source code for the{" "}
      <a
        target={`_blank`}
        href={`https://github.com/ultim8k/how-you-spellin-web`}
      >
        web
      </a>{" "}
      and{" "}
      <a target={`_blank`} href={`https://github.com/ultim8k/HowYouSpellinApp`}>
        mobile
      </a>{" "}
      apps.
    </p>
    <p>
      Install the app on your phone or tablet:
      <br />
      <br />
      <AppStore />
    </p>
    <p>
      <MadeBy />
    </p>
  </div>
);
