import React from "react";
import ReactPlayer from "react-player";
import "./resonsive-player.css";
const ResponsivePlayer = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="80%"
        height="80%"
        controls={true}
      />
    </div>
  );
};

export default ResponsivePlayer;
