import Image from "next/image";
import React, { useState } from "react";
import YouTube from "react-youtube"; // Import the actual YouTube component
import play from "../public/play.svg"; // Import your play icon image

function YoutubePlayer({ videoId, posterImageUrl }) {
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    setPlaying(!playing);
  };

  // YouTube player options (autoplay is set to 1 to always autoplay the video)
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="youtube-container relative">
      <div className={` ${playing ? "playing" : ""}`}>
        {/* If video is playing, show the YouTube player */}
        {playing ? (
          <div
            className={`youtube-player absolute h-full w-full top-0 left-0 `}
          >
            <YouTube videoId={videoId} opts={opts} />
          </div>
        ) : (
          // If video is not playing, show the poster image
          <Image
            className={`absolute h-full w-full top-0 left-0`}
            src={posterImageUrl}
            alt=""
          />
        )}

        {/* Show the play button only if the video is not playing */}
        {playing ? null : (
          <button
            className="play-button pause-button absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            onClick={toggleVideo}
          >
            {/* Use your play icon image */}
            <Image className="lg:w-auto lg:h-auto w-14 h-14" src={play} alt="Play" />
          </button>
        )}
      </div>
    </div>
  );
}

export default YoutubePlayer;
