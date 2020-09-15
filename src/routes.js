import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const Routes = () => {
    function playlist(state = [], action) {
        if(action.type === 'ADD_TRACK')
            return [
                ...state,
                action.payload
            ];
    }
    const store = createStore(playlist);
    return (
        <div>test</div>
    );
}

export default Routes;
