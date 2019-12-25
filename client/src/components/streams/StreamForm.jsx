import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import useFormidable from '../hooks/formidable'

const StreamForm = props => {
    const formidable = useFormidable({
        initialValues: props.initialValues,
        onSubmit: values => {
            props.onSubmit(values)
        }
    })

    const { handleSubmit, handleChange, handleBlur, values } = formidable
    return(
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
    )
}

export default StreamForm