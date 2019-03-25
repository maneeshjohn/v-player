import React, { useEffect } from 'react'
import { Button } from 'semantic-ui-react'

const GoogleOauth = props => {

  useEffect(() => {
    window.gapi.load('client:auth2' , () => {
      window.gapi.client.init({
        clientId: '1043469417942-mflbempggo76305000aru014bcv3nmrf.apps.googleusercontent.com',
        scope: 'email'
      })
      console.log('done')
    })
  })

  return(
    <Button
      as='a'
      inverted
      style={{ marginLeft: '0.5em' }}>
      Sign Up
    </Button>
  )
}

export default GoogleOauth