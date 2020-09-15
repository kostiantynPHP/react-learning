import React, {useRef} from 'react';
import { connect } from 'react-redux';

const AddTrack = (props) => {
    const trackInput = useRef(null);
    const playlistInput = useRef(null);
    function addTrack() {
        props.onAddTrack(trackInput.current.value);
        trackInput.current.value = '';
    }
    function addPlaylist() {
        props.onAddPlaylist(playlistInput.current.value);
        playlistInput.current.value = '';
    }
    return (
        <div>
            <div>Add track</div>
            <input type="text" ref={trackInput} />
            <button onClick={addTrack.bind()} >Add track</button>
            <h2>Tracks</h2>
            <ul>
                {props.tracks.map((track, index) =>
                    <li key={index}>{track}</li>
                )}
            </ul>
            <div>Add playlist</div>
            <input type="text" ref={playlistInput} />
            <button onClick={addPlaylist.bind()} >Add playlist</button>
            <h2>Play List</h2>
            <ul>
                {props.playlist.map((playlist, index) =>
                    <li key={index}>{playlist}</li>
                )}
            </ul>
        </div>
    )
}

export default connect(
    state => ({
    tracks: state.tracks,
    playlist: state.playlist
}),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName})
        },
        onAddPlaylist: (playlistName) => {
            dispatch({type: 'ADD_PLAYLIST', payload: playlistName})
        }
    })
)(AddTrack);
