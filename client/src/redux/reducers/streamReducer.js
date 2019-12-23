import {
    FETCH_STREAMS,
    FETCH_STREAM,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types'

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_STREAMS:
            const streams = {}
            action.payload.forEach(stream => {
                streams[stream.id] = stream
            });
            return { ...state, ...streams }
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }
        case DELETE_STREAM:
            const oldStreams = { ...state }
            delete streams[action.payload]
            return oldStreams
        default:
            return state
    }
}