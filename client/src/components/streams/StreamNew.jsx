import React from 'react'
import { connect } from 'react-redux'
import { Container, Segment, Header, Form, Button } from 'semantic-ui-react'
import useFormidable from '../hooks/formidable'
import { createStream } from '../../redux/actions/streamActions'

const StreamNew = props => {
    const formidable = useFormidable({
        initialValues: {
            title: '',
            description: ''
        },
        onSubmit: values => {
            props.createStream(values)
        }
    })

    const { handleSubmit, handleChange, handleBlur, values } = formidable
    return(
        <div>
            <Container>
                <Segment padded="very">
                    <Header as="h2">Create New Stream</Header>
                    <Form onSubmit={ handleSubmit }>
                        <Form.Field>
                            <label>Stream Title</label>
                            <input
                                type="text"
                                value={ values.title }
                                name="title"
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                placeholder="Title for your stream"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Description</label>
                            <input
                                type="text"
                                value={ values.description }
                                name="description"
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                placeholder="What is the stream about?" />
                        </Form.Field>
                        <Button
                            primary
                            type="submit">
                            Submit
                        </Button>
                    </Form>
                </Segment>
            </Container>
        </div>
    )
}

const NewStream = connect(
    null,
    { createStream }
)(StreamNew)

export { NewStream }