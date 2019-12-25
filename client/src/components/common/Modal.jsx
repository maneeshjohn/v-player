import React from 'react'
import ReactDOM from 'react-dom'
import { Modal, Button } from 'semantic-ui-react'

const Dialog = props => (
    ReactDOM.createPortal(
        <Modal
            open
            size={ props.size }
            dimmer="blurring"
            onClose={ props.onClose }>
            <Modal.Header>
                { props.header }
            </Modal.Header>
            <Modal.Content>
                { props.body }
            </Modal.Content>
            <Modal.Actions>
                <Button
                    negative
                    icon="cancel"
                    labelPosition="left"
                    content="No"
                    onClick={ props.cancel }
                />
                <Button
                    positive
                    icon="checkmark"
                    labelPosition="left"
                    content="Yes"
                    onClick={ props.delete }
                />
            </Modal.Actions>
        </Modal>,
        document.querySelector('#modal')
    )
)

export default Dialog