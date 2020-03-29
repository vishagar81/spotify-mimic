import React from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause, faStepBackward, faStepForward} from "@fortawesome/free-solid-svg-icons";

import useMusicPlayer from '../../hooks/useMusicPlayer';

import "./PlayerControls.css"

const Controls = () => {
    const {togglePlay, currentTrackName, playPreviousTrack, playNextTrack, isPlaying} = useMusicPlayer();
    return (
      <>
        <div className="box controls has-background-grey-dark">
          <div className="current-track has-text-light">
            <div className="marquee">
              {/* We could have used marquee over here but that is not accessible due to animated text */}
              <p>{currentTrackName}</p>
            </div>
          </div>
          <div>
            <button
              className="button has-text-light has-background-grey-dark"
              onClick={playPreviousTrack}
              disabled={!currentTrackName}
            >
              <FontAwesomeIcon icon={faStepBackward} />
            </button>
            <button
              className="button has-text-light has-background-grey-dark"
              onClick={togglePlay}
              disabled={!currentTrackName}
            >
              {isPlaying ? (
                <FontAwesomeIcon icon={faPause} />
              ) : (
                <FontAwesomeIcon icon={faPlay} />
              )}
            </button>
            <button
              className="button has-text-light has-background-grey-dark"
              onClick={playNextTrack}
              disabled={!currentTrackName}
            >
              <FontAwesomeIcon icon={faStepForward} />
            </button>
          </div>
        </div>
      </>
    );
}

export default Controls;