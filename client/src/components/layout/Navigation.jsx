import React from 'react'
import {
  Button,
  Container,
  Menu,  
} from 'semantic-ui-react'

const Navigation = () =>
  <div className="Navigation">
    <Menu
      fixed="top"
      inverted>
      <Container>
        <Menu.Item
          as="h3"
          header>
          V Player
        </Menu.Item>
        <Menu.Item position='right'>
          <Button
            as='a'
            inverted>
            Log in
          </Button>
          <Button
            as='a'
            inverted
            style={{ marginLeft: '0.5em' }}>
            Sign Up
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  </div>

export default Navigation