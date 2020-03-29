import React, { useState } from 'react'

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
    const [state, setState] = useState({
        tracks:[
            {
                name: 'Lost Chameleon - Genesis',
            },
            {
                name: 'The Hipsta - Shaken Soda',
            },
            {
                name: 'Tobu - Such Fun',
            }
        ],
        currentTrackIndex: null,
        isPlaying: false,
    });

    return (
        <MusicPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    );
}

export { MusicPlayerContext, MusicPlayerProvider };