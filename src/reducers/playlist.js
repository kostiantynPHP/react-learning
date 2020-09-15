const initialState = [
    'playlist 1',
    'playlist 2',
    'playlist 3'
];
export default function playlist(state = initialState, action) {
    if(action.type === 'ADD_PLAYLIST') {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}