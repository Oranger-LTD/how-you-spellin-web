import React from "react";

const GOOGLE_PLAY_APP_URL = "https://play.google.com/GOOGLE_PLAY_APP_URL";
const APPLE_IOS_APP_URL =
  "https://apps.apple.com/gb/app/how-you-spellin/id1663502643";

export const AppStore: React.FC = () => (
  <a target={`_blank`} href={APPLE_IOS_APP_URL} title="iOS App Store">
    <img
      alt="iOS App Store"
      src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
    />
  </a>
);

export const PlayStore: React.FC = () => (
  <a target={`_blank`} href={GOOGLE_PLAY_APP_URL} title="Google Play Store">
    <img alt="Google Play Store" src="" />
  </a>
);
