import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Segment, Header } from 'semantic-ui-react'
import { fetchStream, editStream } from '../../redux/actions'
import StreamForm from './StreamForm'
import Loader from '../common/Spinner'

const StreamView = props => {

    useEffect(() => {
        props.fetchStream(props.match.params.id)
    }, [])

    const onSubmit = values => props.editStream(values.id, values)

    return(
        <div>
            <Container>
                <Segment padded="very">
                    <Header as="h2">Edit Stream</Header>
                    { props.stream? (
                        <StreamForm
                            onSubmit={ onSubmit }
                            initialValues={ props.stream }
                        />
                        ): <Loader /> }
                </Segment>
            </Container>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth,
    stream: state.streams[ownProps.match.params.id]
})

export default connect(
    mapStateToProps,
    { fetchStream, editStream }
)(StreamView)