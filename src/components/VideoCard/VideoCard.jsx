// import React from 'react';

// function VideoCard() {
//   return (
//     <div className="relative w-full h-screen mt-6">
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="src/assets/video/testvdtwo.mp4"
//         muted
//         loop
//     autoPlay
//       />
//     </div>
//   );
// }

// export default VideoCard;

import React, { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

function VideoCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-screen mt-6">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="src/assets/video/testvdtwo.mp4"
        muted
        loop
        ref={(el) => {
          if (el) {
            isPlaying ? el.play() : el.pause();
          }
        }}
      />
      <div
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
        onClick={togglePlay}
      >
        <FaRegCirclePlay
          className={`text-white text-6xl ${isPlaying ? "hidden" : ""}`}
        />
      </div>
    </div>
  );
}

export default VideoCard;
