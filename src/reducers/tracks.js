const initialState = [
        'track 1',
        'track 2',
        'track 3'
    ];
export default function tracks(state = initialState, action) {
    if(action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}