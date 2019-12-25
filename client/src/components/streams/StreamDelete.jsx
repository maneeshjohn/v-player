import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import history from '../../config/history'
import { fetchStream, deleteStream } from '../../redux/actions'
import Dialog from '../common/Modal'

const StreamDelete = props => {

    useEffect(() => {
        props.fetchStream(props.match.params.id)
    }, [])

    const onDismiss = () => history.push('/')
    const deleteStream = () => props.deleteStream(props.match.params.id)

    const title = props.stream? props.stream.title: ''
    return(
        <Dialog
            size="mini"
            onClose={ onDismiss }
            header="Delete Stream?"
            body={`Are you sure you want to delete the stream ${ title }`}
            cancel={ onDismiss }
            delete={ deleteStream }
        />
    )
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
})

export default connect(
    mapStateToProps,
    { fetchStream, deleteStream }
)(StreamDelete)