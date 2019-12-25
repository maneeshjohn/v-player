import React, { useEffect, Suspense } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Header, Segment, List, Button } from 'semantic-ui-react'
import { fetchStreams } from '../../redux/actions'
import Loader from '../common/Spinner'

const StreamList = props => {

  useEffect(() => {
    props.fetchStreams()
  }, [])

  const renderAccessButtons = stream => {
    if(stream.userId === props.currentUserId){
      return(
        <List.Content floated="right" style={{ marginTop: '-4%' }}>
          <Link to={`/edit/${ stream.id }`}>
            <Button primary>Edit</Button>
          </Link>
          <Link to={`/delete/${ stream.id }`}>
            <Button negative>Delete</Button>
          </Link>
        </List.Content>
      )
    }
    return null
  }

  const renderStreams = () => (
    props.streams.map(
      stream => (
        <List.Item key={ stream.id }>
          <List.Icon
            name="video"
            size="big"
            verticalAlign="middle"
          />
          <List.Content>
            <List.Header as="h3">
              <Link to={`/show/${ stream.id }`}>{ stream.title }</Link>
            </List.Header>
            <List.Description as="h4">{ stream.description }</List.Description>
          </List.Content>
          { renderAccessButtons(stream) }
        </List.Item>
      )
    )
  )

  return(
    <div>
      <Container>
        <Segment padded>
          <Header as="h2">All Streams</Header>
        </Segment>
        <div style={{ textAlign: 'right' }}>
          <Link to="/new">
            <Button color="teal">Create Stream</Button>
          </Link>
        </div>
        <Segment padded>
          <List celled>
            <Suspense fallback={ <Loader /> }>
              { renderStreams() }
            </Suspense>
          </List>
        </Segment>
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUserId: state.auth.userId,
  streams: Object.values(state.streams)
})

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList)