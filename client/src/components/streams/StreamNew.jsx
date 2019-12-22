import React from 'react'
import { Container, Segment, Header, Form, Button } from 'semantic-ui-react'

const StreamNew = () => (
    <div>
        <Container>
            <Segment padded="very">
                <Header as="h2">Create New Stream</Header>
                <Form>
                    <Form.Field>
                        <label>Stream Title</label>
                        <input placeholder="Title for your stream" />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder="What is the stream about?" />
                    </Form.Field>
                    <Button primary>Submit</Button>
                </Form>
            </Segment>
        </Container>
    </div>
)

export { StreamNew }