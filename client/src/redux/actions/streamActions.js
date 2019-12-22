import streams from '../../apis/streams'
import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from './types'

export const createStream = data => async dispatch => {
    const response = await streams.post('/streams', data)
    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    })
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams')
    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    })
}

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${ id }`)
    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    })
}

export const editStream = (id, data) => async dispatch => {
    const response = await streams.put(`/streams/${ id }`, data)
    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    })
}

export const deleteStream = (id, data) => async dispatch => {
    await streams.delete(`/streams/${ id }`, data)
    dispatch({
        type: DELETE_STREAM,
        payload: id
    })
}