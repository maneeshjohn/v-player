import React from 'react'
import { connect } from 'react-redux'
import { Container, Segment, Header } from 'semantic-ui-react'
import { createStream } from '../../redux/actions'
import StreamForm from './StreamForm'

const StreamNew = props => {

    const onSubmit = values => props.createStream(values)

    const initialValues = { title: '', description: '' }

    return(
        <div>
            <Container>
                <Segment padded="very">
                    <Header as="h2">Create New Stream</Header>
                    <StreamForm
                        onSubmit={ onSubmit }
                        initialValues={ initialValues }
                    />
                </Segment>
            </Container>
        </div>
    )
}

export default connect(
    null,
    { createStream }
)(StreamNew)