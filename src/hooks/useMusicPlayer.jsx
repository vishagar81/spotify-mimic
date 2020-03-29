import { useContext } from 'react'
import { MusicPlayerContext } from '../contexts/MusicPlayerContext'

const useMusicPlayer = () => {
    const [state, setState] = useContext(MusicPlayerContext);

    // play track by index
    function playTrack(index){
        if(index === state.currentTrackIndex){
            togglePlay();
        } else {
            setState(state => ({...state, currentTrackIndex: index, isPlaying: true }))
        }
    }

    // Toggle play or pause
    function togglePlay(){
        setState(state => ({...state, isPlaying: !state.isPlaying}))
    }

    // Play the previous track in the tracks array
    function playPreviousTrack() {
        const newIndex = ((state.currentTrackIndex + -1) % state.tracks.length + state.tracks.length) % state.tracks.length;
        playTrack(newIndex);
    }

    // Play the next track in the tracks array
    function playNextTrack() {
        const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
        playTrack(newIndex);
    }

    return {
        playTrack,
        togglePlay,
        currentTrackName: state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
        trackList: state.tracks,
        isPlaying: state.isPlaying,
        playPreviousTrack,
        playNextTrack,
    }
}

export default useMusicPlayer;