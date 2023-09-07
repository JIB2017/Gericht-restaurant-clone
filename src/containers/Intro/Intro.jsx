import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import video from "../../assets/meal.mp4";
import { useState } from "react";
import { useRef } from "react";
import "./Intro.scss";

function Intro() {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo(!playVideo);
    playVideo ? vidRef.current.pause() : vidRef.current.play();
  };

  return (
    <div className="app__intro">
      <video
        ref={vidRef}
        src={video}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__intro-overlay">
        <div className="app__intro-overlay_circle" onClick={handleVideo}>
          {playVideo ? (
            <BsFillPlayFill color="#fff" fontSize={40} />
          ) : (
            <BsPauseFill color="#fff" fontSize={40} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Intro;
