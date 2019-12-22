import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../../redux/actions'
import { config } from '../../config'
import { Button } from 'semantic-ui-react'

const GoogleOauth = ({
  isSignedIn,
  signIn,
  signOut
}) => {

  useEffect(() => {
    window.gapi.load('client:auth2' , () => {      
      window.gapi.client.init({
        clientId: config.clientId,
        scope: 'email'
      }).then(() => {
        const oauth = window.gapi.auth2.getAuthInstance()
        onAuthChange(oauth.isSignedIn.get(), oauth.currentUser)
      })
    })
  }, [])

  const onAuthChange = (auth, user) => {
    if(auth){ signIn(user.get().getId()) }
     else { signOut() }
  }

  const onSignIn = () => {
    let oauth = window.gapi.auth2.getAuthInstance()
    oauth.signIn().then(() => onAuthChange(oauth.isSignedIn.get(), oauth.currentUser))
  }

  const onSignOut = () => {
    let oauth = window.gapi.auth2.getAuthInstance()
    oauth.signOut().then(() => onAuthChange(oauth.isSignedIn.get()))
  }

  const buttonConfig = {
    text: isSignedIn? 'Sign out': 'Sign in',
    action: isSignedIn? onSignOut: onSignIn,
    color: isSignedIn? 'red': 'green'
  }

  const { text, action, color } = buttonConfig
  return(
    <Button
      as='a'
      color={ color }
      inverted
      onClick={ action }
      style={{ marginLeft: '0.5em' }}>
      <i className="google icon" />
      { text }
    </Button>
  )
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
})

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleOauth)