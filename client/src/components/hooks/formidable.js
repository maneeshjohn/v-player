import { useReducer } from 'react'

const reducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_VALUES':
            return {
                ...state,
                values: {
                    ...state.values,
                    ...action.payload
                }
            }
        case 'SET_TOUCHED':
            return {
                ...state,
                touched: {
                    ...state.touched,
                    ...action.payload
                }
            }
        default:
            return state
    }
}

const formidable = props => {
    const [values, dispatch] = useReducer(reducer, {
        values: props.initialValues,
        touched: {}
    })

    const handleChange = e => {
        const { name, value } = e.target
        e.persist()
        dispatch({ type: 'SET_VALUES', payload: { [name]: value } })
    }

    const handleBlur = e => {
        e.persist()
        dispatch({ type: 'SET_TOUCHED', payload: { [e.target.name]: true } })
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit(values.values)
    }

    return { handleSubmit, handleChange, handleBlur, ...values }
}

export default formidable