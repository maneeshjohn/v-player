import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Grid, Header, Segment } from 'semantic-ui-react'
import { fetchStreams } from '../../redux/actions'

const StreamList = props => {

  useEffect(() => {
    props.fetchStreams()
  }, [])

  return(
    <div>
      <Container>
        <Segment padded>
          <Header as="h5">All Streams</Header>
          <Grid columns={ 3 }>
            <Grid.Row>
              <Grid.Column>
                <Segment
                  inverted
                  color="red"
                  padded="very">
                  Stream 1
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  inverted
                  color="green"
                  padded="very">
                  Stream 2
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment
                  inverted
                  color="blue"
                  padded="very">
                  Stream 3
                </Segment>
              </Grid.Column>            
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({
  streams: state.streams
})

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList)