import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'

const GoogleOauth = props => {

  const [auth, setAuth] = useState('hjg')

  useEffect(() => {
    window.gapi.load('client:auth2' , () => {      
      window.gapi.client.init({
        clientId: '1043469417942-mflbempggo76305000aru014bcv3nmrf.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        const oauth = window.gapi.auth2.getAuthInstance()
        setAuth(oauth.isSignedIn.get())
      })
    })
  }, [auth])

  const login = () => {
    if(!auth){
      let oauth = window.gapi.auth2.getAuthInstance()
      oauth.signIn().then(() => setAuth(oauth.isSignedIn.get()))
    }

    if(auth === true){
      let oauth = window.gapi.auth2.getAuthInstance()      
      oauth.signOut().then(() => setAuth(oauth.isSignedIn.get()))
    }
  }

  const buttonText = auth === true? 'Name': 'Sign in'
  return(
    <Button
      as='a'
      inverted
      onClick={login}
      style={{ marginLeft: '0.5em' }}>
      {buttonText}
    </Button>
  )
}

export default GoogleOauth