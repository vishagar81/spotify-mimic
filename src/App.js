import React from 'react';

import TrackList from "./components/TrackList/TrackList";
import PlayerControls from "./components/PlayerControls/PlayerControls";

import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

import './App.css';

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList/>
        <PlayerControls/>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
